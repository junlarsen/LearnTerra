import { Request, Response } from 'express'
import { findGame } from '../app/'

export const get = async (req: Request, res: Response) => {
  const game = await findGame(req.params.game || 'unknown')

  console.log(`${new Date().toLocaleString()} | GET | /api/v1/game/${req.params.game} | ${game !== null ? 'Success' : 'Fail'}`)

  if (game === null) {
    return res.status(404).json({ status: 404, message: 'Game Not Found' })
  }

  return res.status(200).json(game)
}