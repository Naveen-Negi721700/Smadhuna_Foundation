import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  donation_section: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);