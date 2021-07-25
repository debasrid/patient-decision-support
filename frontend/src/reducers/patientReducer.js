import * as constants from '../constants/patientConstants'

const INITIAL_STATE = {
  patients: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.PATIENT_LIST_SUCCESS:
      return {
        ...state, patients: action.payload.map(patient =>
          ({...patient})
        )
      };
    default:
      return state
  }
}
