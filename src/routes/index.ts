import { Express, Request, Response } from 'express'
import * as winston from 'winston'
import * as JokesRoutes from './JokeRoutes'

export function initRoutes(app: Express) {
  winston.log('info', '--> Routing initialization')

  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }))

  JokesRoutes.routes(app)

  app.all('*', (req: Request, res: Response) => res.boom.notFound())
}