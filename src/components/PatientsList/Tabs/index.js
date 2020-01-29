import React from 'react';
import Tab from './Tab'

function Tabs(props) {
    return (<div className="patients-list_tabs">
        <Tab
            title="Присутсвуют"
            amount={props.presentAmount}
            handleDisplayStatus={props.handleDisplayStatus}
            value="present"
            active={props.displayStatus === 'present' ? true : false}
        ></Tab>
        <Tab
            title="Выбывшие"
            amount={props.quittingAmount}
            handleDisplayStatus={props.handleDisplayStatus}
            value="quitting"
            active={props.displayStatus === 'quitting' ? true : false}
        ></Tab>
    </div>);
}

export default Tabs;