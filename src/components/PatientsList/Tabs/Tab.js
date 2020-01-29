import React from 'react';

function Tab(props) {
    return (<div
        className="patients-list_tabs__tab"
        onClick={() => { props.handleDisplayStatus(props.value) }}
        style={props.active ? {
            color: "#3398cc",
            borderBottom: "solid 3px #3398cc",
            paddingBottom: "17px"
        } : null}
    >
        {props.title.toUpperCase()}({props.amount})
        </div>);
}

export default Tab;