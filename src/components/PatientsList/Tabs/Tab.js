import React, { Component } from 'react';

class Tab extends Component {
    state = {}


    render() {
        return (<div
            className="patients-list_tabs__tab"
            onClick={() => { this.props.handleDisplayStatus(this.props.value) }}
            style={this.props.active ? {
                color: "#3398cc",
                borderBottom: "solid 3px #3398cc",
                paddingBottom: "17px"
            } : null}
        >
            {this.props.title.toUpperCase()}({this.props.amount})
        </div>);
    }
}

export default Tab;