import React, { Component } from 'react';
import Tab from './Tab'

class Tabs extends Component {
    state = {
    }
    render() {
        return (<div className="patients-list_tabs">
            <Tab
                title="Присутсвуют"
                amount={this.props.presentAmount}
                handleDisplayStatus={this.props.handleDisplayStatus}
                value="present"
                active={this.props.displayStatus === 'present' ? true : false}
            ></Tab>
            <Tab
                title="Выбывшие"
                amount={this.props.quittingAmount}
                handleDisplayStatus={this.props.handleDisplayStatus}
                value="quitting"
                active={this.props.displayStatus === 'quitting' ? true : false}
            ></Tab>
        </div>);
    }
}

export default Tabs;