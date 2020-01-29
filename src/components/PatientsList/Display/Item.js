import React from 'react';
import { connect } from 'react-redux';
import { selectPatientAC } from '../../../redux/actions'

function Item(props) {
    const handlePatientSelection = () => {
        props.selectPatient(props.patientInfo)
    }

    const { patientInfo } = props
    return (<tr onClick={handlePatientSelection} className="patients-list_display_row">
        <td>{patientInfo.historyNumber}</td>
        <td>{`${patientInfo.lastName} ${patientInfo.firstName} ${patientInfo.patrName}`}</td>
        <td>{patientInfo.bedNumber || patientInfo.cause}</td>
    </tr>);

}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPatient: (patientInfo) => dispatch(selectPatientAC(patientInfo))
    }
}

export default connect(null, mapDispatchToProps)(Item);