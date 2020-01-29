import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPatientAC } from '../../../redux/actions'

class Item extends Component {
    state = {}
    handlePatientSelection = () => {
        this.props.selectPatient(this.props.patientInfo)
    }
    render() {
        const { patientInfo } = this.props
        return (<tr onClick={this.handlePatientSelection} className="patients-list_display_row">
            <td>{patientInfo.historyNumber}</td>
            <td>{`${patientInfo.lastName} ${patientInfo.firstName} ${patientInfo.patrName}`}</td>
            <td>{patientInfo.bedNumber || patientInfo.cause}</td>
        </tr>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPatient: (patientInfo) => dispatch(selectPatientAC(patientInfo))
    }
}

export default connect(null, mapDispatchToProps)(Item);