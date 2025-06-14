// require('dotenv').config({ path: "../env" })  for config env variables
import dotenv from "dotenv"
import mongoose from  "mongoose"
import connectionDb from "./db/db_connection.js"

// for use of it you have add some fetures in package.json file in scripts
dotenv.config({path:'../env'})

// database connection function
connectionDb()



















// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("errror",(error)=>{
//             console.log("Error: ",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })()