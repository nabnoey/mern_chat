const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const messageSchema = Schema(
  {
    text: { type: String },
    file: { type: String },
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    recipient: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

const MessageModel = model("Message", messageSchema);
module.exports = MessageModel;
