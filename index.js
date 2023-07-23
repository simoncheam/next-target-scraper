import express from "express"
import {getMySearchURL} from './src/app/page'

const PORT = process.env.PORT || 5000
const app = express()

const URL = 'https://www.target.com/s?searchTerm=halloween'




app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))