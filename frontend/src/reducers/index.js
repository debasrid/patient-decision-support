import { combineReducers } from 'redux'
import patient from './patientReducer'

const patientApp = combineReducers({
  patient
});

export default patientApp