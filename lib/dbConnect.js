import mongoose from "mongoose"


const MONGODB_URI = process.env.MONGODB_URI
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
}

const conectarDB = async() => {
    try {
        await mongoose.connect(MONGODB_URI, opts)
        console.log("mongoDB conectado 🚀🚀" )
        
    } catch (error) {
        console.log("errorrr  😂😂😂")
        console.log(error)
        process.exit(1)   
    }
}

export default conectarDB