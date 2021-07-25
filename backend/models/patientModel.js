import mongoose from 'mongoose';

const patientCompleteSchema = new mongoose.Schema(
  {
    x: { type: String, required: true, unique: true },
    y: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
  {
    patientDataType: "complete",
  }
);
const patientRecentSchema = new mongoose.Schema(
  {
    x: { type: String, required: true, unique: true },
    y: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
  {
    patientDataType: "recent",
  }
);
const PatientComplete = mongoose.model('PatientComplete', patientCompleteSchema);
const PatientRecent= mongoose.model('PatientRecent', patientRecentSchema);

export {PatientComplete, PatientRecent};
