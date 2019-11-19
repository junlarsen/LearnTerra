import { Request, Response } from 'express'
import { findGame, updateGame } from '../app/'

export const get = async (req: Request, res: Response) => {
  const game = await findGame(req.params.game || 'unknown')

  console.log(`${new Date().toLocaleString()} | GET | /api/v1/game/${req.params.game} | ${game !== null ? 'Success' : 'Fail'}`)

  if (game === null) {
    return res.status(404).json({ status: 404, message: 'Game Not Found' })
  }

  return res.status(200).json(game)
}

export const comment = async (req: Request, res: Response) => {
  const body = req.body
  const game = await findGame(req.params.game || 'unknown')

  console.log(`${new Date().toLocaleString()} | POST | /api/v1/annotations/${req.params.game}/${req.params.frame} | ${game !== null ? 'Success' : 'Fail'}`)

  if (
    (game === null) ||
    (body === undefined) ||
    (typeof body.text !== 'string') ||
    (body.frame < 1 || body.frame > game.frameCount)
  ) {
    return res.status(400).json({ status: 400, message: 'Invalid API Schema' })
  }

  updateGame(req.params.game, {
    ...game,
    annotations: [
      ...game.annotations || [],
      {
        text: body.text,
        frame: body.frame
      }
    ]
  }).catch(console.error)

  return res.status(200).json({ status: 200, message: 'Success' })
}
