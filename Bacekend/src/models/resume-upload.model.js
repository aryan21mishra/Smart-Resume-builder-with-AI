import mongoose, { Schema } from "mongoose";


const resumeUploadSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required:true,
        },
        url:{
            type:String,
            trim:true,
            required:true,
        },
        publicId:{
            type:String,
            trim:true,
            required:true,
        },  
        rawText:{
            type:String,
        },
        userId:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
    },
    {timestamps:true}
)

export const ResumeUpload = mongoose.model("ResumeUpload", resumeUploadSchema);
