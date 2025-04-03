import express from "express"
import cors from "cors"
import userRoute from "../src/routes/user.routes.js"
import videoRoute from "../src/routes/video.routes.js"
import commentRoute from "../src/routes/comment.routes.js"
export const app = express();



app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use('/users', userRoute)
app.use('/video', videoRoute)
app.use('/comment', commentRoute)