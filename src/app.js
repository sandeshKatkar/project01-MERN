import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()

// cors are used for file handling
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"20kb"})) //middleware : it allows json data

app.use(express.urlencoded({extended:true,limit:"20kb"})) // middleware : it allow data from url

app.use(express.static("public")) // it allows to keep some data/files in public folder

//cookie parser 

app.use(cookieParser())

export {app}