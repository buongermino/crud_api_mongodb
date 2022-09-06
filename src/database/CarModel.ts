import mongoose, { Schema } from "mongoose";

const CarModel = new Schema(
    {
        brand: String,
        model: String,
        series: String,
        year: Number,
        mileage: Number,
        transmission: String,
        price: Number    
    }, 
    {
        timestamps: true
    })

    export default mongoose.model("Car", CarModel)