import { galaxiesService } from "../services/GalaxiesService.js";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
      .get('/:galaxyId', this.getGalaxiesById)
      .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
      .post('', this.createGalaxies)
  }
  async getGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getGalaxies()
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }
  async getGalaxiesById(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const galaxy = await galaxiesService.getGalaxiesById(galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async getPlanetsByGalaxyId(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }
  async createGalaxies(req, res, next) {
    try {
      const galaxyData = req.body
      const galaxy = await galaxiesService.createGalaxies(galaxyData)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}