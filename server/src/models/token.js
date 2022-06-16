import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  email: { type: String, unique: true, required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 900 },
});

const Token = mongoose.model("Token", tokenSchema);

// tokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 900 });

export default Token;
