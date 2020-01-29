import React, { Component } from 'react';

import Tabs from './Tabs';
import Display from './Display';

class PatientsList extends Component {
    state = {
        present: null,
        quitting: null,
        displayStatus: 'present',
    }

    handleDisplayStatus = (status) => {
        this.setState({ displayStatus: status })
    }

    componentDidMount() {
        fetch('/patients?list=present')
            .then(data => data.json())
            .then(response => this.setState({ present: response.data }))
        fetch('/patients?list=quitting')
            .then(data => data.json())
            .then(response => this.setState({ quitting: response.data }))
    }

    render() {
        const { quitting, present, displayStatus } = this.state
        return (<div className="patients-list">
            <Tabs
                quittingAmount={quitting ? quitting.length : 0}
                presentAmount={present ? present.length : 0}
                handleDisplayStatus={this.handleDisplayStatus}
                displayStatus={displayStatus}
            ></Tabs>
            <Display status={displayStatus} list={this.state[displayStatus]}></Display>
        </div>);
    }
}

export default PatientsList;