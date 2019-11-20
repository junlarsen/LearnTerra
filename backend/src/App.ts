import express from 'express'
import cors from 'cors'
import body from 'body-parser'
import path from 'path'

import * as APIController from './controllers/APIController'

const app = express()
const staticDir = path.resolve(__dirname, '../../data')

app.use(express.static(staticDir))
app.use(cors())
app.use(body.json())

app.get('/api/v1/game/:game', APIController.get)
app.post('/api/v1/annotations/:game/:frame', APIController.comment)

app.listen(8001)