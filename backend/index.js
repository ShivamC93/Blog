//centre of backend
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv =  require('dotenv')
const cors = require('cors')
const multer = require('multer')
const path= require("path")
const cookiParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments')



//connextion with database
const connextDB = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully!");
    }
    catch(err){
        console.log(err)
    }
}
//middlewares
dotenv.config()
app.use(express.json())
app.use(cors({origin: "http://localhost:5173",credentials:true}))
app.use(cookiParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)
app.use("/images",express.static(path.join(__dirname,"/images")))


//image upload
const storage = multer.diskStorage({
    destination: (req, file, fn) => {
        fn(null, 'images')
    },
    filename: (req, file, fn) => {
        fn(null,req.body.img)
        //fn(null,"image1.jpg")
    }
})

const upload = multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    //console.log(req.body);
    res.status(200).json("file has been uploaded succesfully!")
})


app.listen(process.env.PORT,()=>{
    connextDB()
    console.log("Port is running on port: "+process.env.PORT);
})