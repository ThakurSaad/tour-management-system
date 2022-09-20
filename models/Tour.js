const mongoose = require("mongoose");

// Schema
const tourSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [
        true,
        "Please provide a image url for this tour. Only Provide the live image url",
      ],
    },
    title: {
      type: String,
      required: [true, "Please provide a title for this tour"],
      unique: [true, "Title must be unique"],
      minLength: [5, "Title must be at least 5 characters long"],
      maxLength: [100, "Title can not be longer than 100 characters"],
    },
    rating: {
      type: Number,
      required: [true, "Please provide a rating for this tour"],
      min: [0, "Rating can not be negative"],
      max: [10, "Rating can not be more than 10"],
    },
    views: {
      type: Number,
      required: [true, "Please provide number of views this tour got"],
      min: [0, "Views can not be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);

          if (isInteger) return true;
          else return false;
        },
      },
      message: "Views must be an integer",
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this tour"],
      min: [0, "Price can not be negative"],
    },
    unit: {
      type: String,
      required: [true, "Please provide a unit for the price"],
      enum: {
        values: [
          "$",
          "USD",
          "€",
          "Euro",
          "৳",
          "BDT",
          "₹",
          "Rupee",
          "¥",
          "Yen",
          "₩",
          "Won",
        ],
        message:
          "Unit value can not be '{VALUE}', must be $, USD, €, Euro, ৳, BDT, ₹, Rupee, ¥, Yen, ₩, Won",
      },
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this tour"],
    },
    destinations: {
      type: String,
      required: [true, "Please provide destinations for this tour"],
    },
    ageRange: {
      type: String,
      required: [true, "Please provide explore's age range for this tour"],
    },
    regions: {
      type: String,
      required: [true, "Please provide the regions for this tour"],
    },
    travelStyle: {
      type: String,
      required: [
        true,
        "Please provide travel style for this tour. Ex: Group, Guided, Historical etc",
      ],
    },
    operatedIn: {
      type: String,
      required: [
        true,
        "Please provide which language this tour is operated in",
      ],
      enum: {
        values: [
          "Bengali",
          "Japanese",
          "Korean",
          "Thai",
          "Arabic",
          "Greek",
          "English",
          "Hindi",
          "Urdu",
          "Chinese",
          "German",
          "Spanish",
        ],
        message:
          "The language operated in can not be {VALUE}. Supported languages - Bengali, Japanese, Korean, Thai, Arabic, Greek, English, Hindi, Urdu, Chinese, German, Spanish ",
      },
    },
    operator: {
      type: String,
      required: [
        true,
        "Please provide the company name which operates this tour",
      ],
    },
  },
  { timestamps: true }
);

// Model
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
