import express from 'express'
import mongoose from 'mongoose'
import { Category } from './db.js'
import entryRoutes from './routes/entry_routes.js'
import cors from 'cors'

const app = express()

// Middleware
// TODO: Prod: Add origin restriction to cors call
app.use(cors())

app.use(express.json()) 

// Flask
// @app.route('/')
// def home():
//     return {'info': 'Journal API'}
app.get('/', (request, response) => response.send({ info: 'Journal API Live!!' }))

// TODO: Move /categories route to a routes module
// TODO: Complete categories CRUD
// TODO: ADVANCED: Add a route GET /categories/:cat_id/entries that returns all entries in the given category.


// Get list of categories
app.get('/categories', async (req, res) => res.send(await Category.find()))

app.use(entryRoutes)

export default app
