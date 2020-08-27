import express from 'express'
import { helloWolrd } from './routes'

const app = express()

app.get('/', helloWolrd)

app.listen(3333)