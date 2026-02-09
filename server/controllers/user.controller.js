const UserModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const signUp = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).send({ message: "กรุณากรอกให้ครบจ้า" });
  }

  try {
    // เช็ค user ซ้ำ
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // 🔥 สร้าง user ใหม่ก่อน
    const newUser = await UserModel.create({
      fullName,
      email,
      password: hashedPassword,
    });

    // 🔥 สร้าง token
    const token = jwt.sign({ id: newUser._id }, secret, { expiresIn: "1d" });

    // 🔥 ส่ง cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.send({
      message: "Register success",
      token: token,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "รหัสผ่านไม่ถูกต้อง" });
    }

    // สร้าง token
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1d" });

    // ส่ง cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.send({
      message: "Login success",
      fullName: user.fullName,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const logOut = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });

    res.status(200).json({
      message: "Logout success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  signUp,
  login,
  logOut,
};
