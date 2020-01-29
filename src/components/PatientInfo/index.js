import React, { Component } from 'react';

class PatientInfo extends Component {
    state = {}
    render() {
        return (<div className="patient-info">
            <div className="patient-info_header">
                <span>Информация о пациенте</span>
                <img className="patient-info_header__arrow" src='./left-arrow.png' alt="left arrow"></img>
            </div>
        </div>);
    }
}

export default PatientInfo;