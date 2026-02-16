import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { useNavigate } from "react-router";

function Register() {
    const navigate = useNavigate()
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-slate-900 to-slate-800 text-white">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">

          {/* logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-orange-500 p-3 rounded-xl mb-3">
              <MessageSquare size={28} />
            </div>
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-gray-400 text-sm">
              Get started with your free account
            </p>
          </div>

          {/* form */}
          <div className="space-y-4">

            {/* fullname */}
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full bg-slate-900 mt-1"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full bg-slate-900 mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* password */}
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-slate-900 mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* button */}
            <button className="btn w-full bg-orange-500 hover:bg-orange-600 border-none text-white mt-2" onClick={()=> navigate("/login")}>
              Create Account
            </button>

            {/* signin */}
            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{" "}
              <span className="text-orange-400 cursor-pointer hover:underline">
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 items-center justify-center">
        <div className="text-center">

          {/* grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-slate-800 rounded-xl"
              ></div>
            ))}
          </div>

          <h2 className="text-xl font-semibold">Join our community</h2>
          <p className="text-gray-400 mt-2 max-w-sm">
            Connect with friends, share moments, and stay in touch with your loved ones.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;
