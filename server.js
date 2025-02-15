import express from 'express';
import cors from 'cors';
import { port } from './https.js';
import router from './v1/routes/index.routes.js';
export const app = express();

// Midelwares
app.use(cors());
app.use(express.json());

app.use('/api/v1/', router);

app.listen(port, (err)=> {
  if(!err){
    console.log(`server running on port ${port}`)
  }
})