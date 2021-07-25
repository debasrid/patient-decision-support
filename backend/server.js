
import express from 'express';
import cors from 'cors';
import path from 'path';
import config from './config';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import patientRouter from './routers/patientRouter';

dotenv.config();
const mongodbUrl= config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/patients', patientRouter);

app.use(express.static(path.join(__dirname, '/../frontend/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../frontend/build'))
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = config.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
