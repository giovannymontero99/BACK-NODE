import express from 'express';
import cors from 'cors';
import { port } from './https.js';
import router from './v1/routes/index.routes.js';
import cookieParser from 'cookie-parser';
export const app = express();

// Midelwares
app.use(cors({
  credentials: true
}));
app.use(express.json());
app.use(cookieParser())

app.use('/api/v1/', router);

app.listen(port, (err)=> {
  if(!err){
    console.log(`server running on port ${port}`)
  }
})