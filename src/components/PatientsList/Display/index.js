import React, { Component } from 'react';

import Item from './Item'

class Display extends Component {
    state = {}

    handleThirdField = () => {
        const { status } = this.props
        if (status === 'present') return 'Номер палаты';
        if (status === 'quitting') return 'Причина выбытия';
    }

    render() {
        return (
            <table className="patients-list_display">
                <tbody>
                    <tr>
                        <th>№ ИБ</th>
                        <th>ФИО</th>
                        <th>{this.handleThirdField()}</th>
                    </tr>
                    {this.props.list && this.props.list.map(patient => {
                        return <Item key={patient.historyNumber} patientInfo={patient}></Item>
                    })}
                </tbody>
            </table>);
    }
}

export default Display;