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
                <tr>
                    <th>№ ИБ</th>
                    <th>ФИО</th>
                    <th>{this.handleThirdField()}</th>
                </tr>
                {this.props.list && this.props.list.map(patient => {
                    return <Item
                        name={`${patient.lastName} ${patient.firstName} ${patient.patrName}`}
                        historyNumber={patient.historyNumber}
                        cause={patient.cause}
                        bedNumber={patient.bedNumber}
                    ></Item>
                })}
            </table>);
    }
}

export default Display;