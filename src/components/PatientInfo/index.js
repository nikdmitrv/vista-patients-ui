import React, { Component } from 'react';
import { connect } from 'react-redux';
class PatientInfo extends Component {
    state = {}
    calculateAge(dob) {
        const diff = Date.now() - new Date(dob)
        return Math.abs(new Date(diff).getUTCFullYear() - 1970)
    }
    render() {
        const { selectedPatient } = this.props
        return (<div className="patient-info">
            <div className="patient-info_header">
                <span>Информация о пациенте</span>
                <img className="patient-info_header__arrow"
                    src='./left-arrow.png'
                    alt="left arrow"></img>
            </div>
            <div className="patient-info_content">
                <div className="patient-info_content_inputContainer">
                    <label>ФИО</label>
                    <input disabled
                        className="patient-info_content__input"
                        value={selectedPatient && `${selectedPatient.lastName} ${selectedPatient.firstName} ${selectedPatient.patrName}`}
                    ></input>
                </div>
                <div className="patient-info_content_inputContainer">
                    <label>Возраст</label>
                    <input disabled
                        className="patient-info_content__input"
                        value={selectedPatient && this.calculateAge(selectedPatient.birthDate)}
                    ></input>
                </div>
                <div className="patient-info_content_inputContainer">
                    <label>Диагноз</label>
                    <input disabled
                        className="patient-info_content__input"
                        value={selectedPatient && selectedPatient.diagnosis}
                    ></input>
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = (store) => {
    return { selectedPatient: store.selectedPatient }
}

export default connect(mapStateToProps)(PatientInfo);