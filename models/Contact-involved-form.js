import mongoose from "mongoose";

const ContactInvolvedFormSchema = new mongoose.Schema({
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

export default mongoose.models.ContactInvolvedForm ||
  mongoose.model("ContactInvolvedForm", ContactInvolvedFormSchema);