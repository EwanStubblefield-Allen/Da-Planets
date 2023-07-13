import mongoose, { Schema } from "mongoose";

export const PlanetSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 10,
    required: true
  },
  biome: {
    type: String,
    minLength: 2,
    maxLength: 10,
    required: true
  },
  atmosphere: {
    type: Boolean,
    default: false
  },
  galaxyId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'galaxy'
  },
})
PlanetSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'planet'
})