import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'
import userRouter from './routes/user.js'

const  app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter)

//const CONNECTION_URL = 'mongodb+srv://Marko:ajtigaj9999@cluster0.uqqeotp.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
//promise 
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) 
.catch((error) => console.log(error.message));

mongoose.connection.once('open', () => {
  console.log('✅ MongoDB connected!');
});

