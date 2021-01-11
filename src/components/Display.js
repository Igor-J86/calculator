import React from 'react';

class Display extends React.Component {
    render() {
        return(
            <div className="display">
                <div className="previous-number">{this.props.previousValue} {this.props.operator}</div>
                <div className="current-number">{this.props.showValue}</div>
            </div>
        )
    }
}

export default Display;