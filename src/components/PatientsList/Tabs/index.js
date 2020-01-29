import React, { Component } from 'react';
import Tab from './Tab'

class Tabs extends Component {
    state = {}
    render() {
        return (<div className="patients-list_tabs">
            <Tab
                title="Присутсвуют"
                amount={this.props.presentAmount}
                handleDisplayStatus={this.props.handleDisplayStatus}
                value="present"
            ></Tab>
            <Tab
                title="Выбывшие"
                amount={this.props.quittingAmount}
                handleDisplayStatus={this.props.handleDisplayStatus}
                value="quitting"
            ></Tab>
        </div>);
    }
}

export default Tabs;