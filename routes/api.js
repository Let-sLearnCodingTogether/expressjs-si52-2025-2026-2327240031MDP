import express from "express"
import * as authcontroller from "../controller/authController"

const api = express.Router()

api.post('/register', authcontroller.register)

export default api
