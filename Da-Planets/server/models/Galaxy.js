import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 10,
    required: true
  },
  stars: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})