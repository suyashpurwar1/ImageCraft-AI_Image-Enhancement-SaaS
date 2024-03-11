import { Schema, model, models } from "mongoose";

export interface Image extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformation?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id:string;
    firstName:string;
    lastname:string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

// Defining the schema for the Image collection
const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformation: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Defining the Image model and exporting it
const Image = models?.Image || model("Image", ImageSchema);
export default Image;
