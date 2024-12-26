const mongoose = require("mongoose");

// Car owners Schema
const carownersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address",
      ],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["showroomOwner", "selfOwner", "agent"],
    },
    image: {
      publicId: {
        type: String,
        default: null,
      },
      url: {
        type: String,
        default: null,
      },
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: ["active", "inactive"], // You can add more statuses as needed
      default: "active", // Default status
    },
  },
  { timestamps: true }
);

// Create a model based on the schema
export default mongoose.models.carowner ||
  mongoose.model("carowner", carownersSchema);
