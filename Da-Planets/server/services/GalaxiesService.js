import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class GalaxiesService {
  async getGalaxies() {
    const galaxies = await dbContext.Galaxy.find()
    return galaxies
  }
  async getGalaxiesById(galaxyId) {
    const galaxy = await dbContext.Galaxy.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest('INVALID ID')
    }
    return galaxy
  }
  async createGalaxies(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }
}

export const galaxiesService = new GalaxiesService()