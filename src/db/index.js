import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';

const string = "mongodb://localhost:27017//videotube"

 const connectdb=async()=>{
     try{
       let connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log("MongoDB connected !!")
     }catch(err){
        console.log("MONGODB connection error: ",err)
     }
      }
export default connectdb;