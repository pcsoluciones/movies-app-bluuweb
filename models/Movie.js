import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "debe ingresar un título"]
    },
    plot: {
        type: String,
        required: [true, "debe ingresar el plot"]
    }
})

// en caso q no exista lo crea
export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema)    