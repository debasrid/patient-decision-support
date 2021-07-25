import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import {PatientComplete, PatientRecent} from '../models/patientModel.js';

const patientRouter = express.Router();

patientRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const patients = await PatientComplete.find({});
    res.send(patients);
  })
);

patientRouter.get(
  '/latest',
  expressAsyncHandler(async (req, res) => {
    const patients = await PatientRecent.find({});
    res.send(patients);
  })
);

patientRouter.get(
  '/seedAll',
  expressAsyncHandler(async (req, res) => {
    await PatientComplete.remove({});
    const createdPatients = await PatientComplete.insertMany(data.data_for_graph.complete);
    res.send({ createdPatients});
  })
);

patientRouter.get(
  '/seedRecent',
  expressAsyncHandler(async (req, res) => {
    await PatientRecent.remove({});
    const createdPatients = await PatientRecent.insertMany([data.data_for_graph.recent]);
    res.send({ createdPatients});
  })
);

export default patientRouter;
