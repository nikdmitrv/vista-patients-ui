import React, { Component } from 'react';

class Item extends Component {
    state = {}
    render() {
        return (<tr className="patients-list_display_row">
            <td>{this.props.historyNumber}</td>
            <td>{this.props.name}</td>
            <td>{this.props.bedNumber || this.props.cause}</td>
        </tr>);
    }
}

export default Item;