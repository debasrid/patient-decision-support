import Axios from 'axios';
import {
  PATIENT_COMPLETELIST_REQUEST,
  PATIENT_RECENTLIST_REQUEST,
  PATIENT_LIST_SUCCESS,
  PATIENT_LIST_FAIL,
} from '../constants/patientConstants';

export const listCompletePatientData = () => async (dispatch) => {
  dispatch({
    type: PATIENT_COMPLETELIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("api/patients/");
    dispatch({ type: PATIENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PATIENT_LIST_FAIL, payload: error.message });
  }
};

export const listRecentPatientData = () => async (dispatch) => {
  dispatch({
    type: PATIENT_RECENTLIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("api/patients/latest");;
    dispatch({ type: PATIENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PATIENT_LIST_FAIL, payload: error.message });
  }
};