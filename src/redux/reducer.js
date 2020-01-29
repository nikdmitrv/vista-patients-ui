import { SELECT_PATIENT } from './types'

export default function (state = {}, action) {
    switch (action.type) {
        case SELECT_PATIENT:
            return { ...state, selectedPatient: action.selectedPatient }

        default:
            return state;
    }
}
