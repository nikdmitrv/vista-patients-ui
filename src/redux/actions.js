import { SELECT_PATIENT } from './types';

const selectPatientAC = (patientInfo) => {
    return {
        type: SELECT_PATIENT,
        selectedPatient: patientInfo,
    }
}

export { selectPatientAC }