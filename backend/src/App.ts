import express from 'express'

import * as APIController from './controllers/APIController'

const app = express()

app.get('/api/v1/game/:game', APIController.get)

app.listen(8000)