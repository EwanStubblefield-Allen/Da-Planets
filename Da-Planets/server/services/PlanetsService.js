import { dbContext } from "../db/DbContext.js"
import { PlanetSchema } from "../models/Planet.js"
import { galaxiesService } from "./GalaxiesService.js"

class PlanetsService {
  async getPlanetsByGalaxyId(galaxyId) {
    const planets = await dbContext.Planet.find({ galaxyId: galaxyId }).populate('galaxy', 'name')
    return planets
  }
  async getPlanets() {
    const planets = await dbContext.Planet.find()
    return planets
  }
  async createPlanets(planetData) {
    await galaxiesService.getGalaxiesById(planetData.galaxyId)
    const planet = await dbContext.Planet.create(planetData)
    return planet
  }
}

export const planetsService = new PlanetsService()