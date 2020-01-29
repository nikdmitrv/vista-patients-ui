import React, { Component } from 'react';

class Tab extends Component {
    state = {}
    render() {
        return (<div
            className="patients-list_tabs__tab"
            onClick={() => { this.props.handleDisplayStatus(this.props.value) }}
        >
            {this.props.title} ({this.props.amount})
        </div>);
    }
}

export default Tab;