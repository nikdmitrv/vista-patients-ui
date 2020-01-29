import React from 'react';

import Item from './Item'

function Display(props) {
    const handleThirdField = () => {
        const { status } = props
        if (status === 'present') return 'Номер палаты';
        if (status === 'quitting') return 'Причина выбытия';
    }

    return (
        <table className="patients-list_display">
            <tbody>
                <tr>
                    <th>№ ИБ</th>
                    <th>ФИО</th>
                    <th>{handleThirdField()}</th>
                </tr>
                {props.list && props.list.map(patient => {
                    return <Item key={patient.historyNumber} patientInfo={patient}></Item>
                })}
            </tbody>
        </table>);
}

export default Display;