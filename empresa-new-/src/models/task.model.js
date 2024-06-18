import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type : "string",
        required: true
    }, 

    description:  {
        type : "string",
        required: true
    }, 

    date:  {
        type : "Date",
        default: Date.now,
    } 

}, {
    timestamps: true,
})

export default mongoose.model("Task", taskSchema);