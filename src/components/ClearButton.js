import React from 'react';

class ClearButton extends React.Component {
    render() {
        return(
            <button className="clear-btn" onClick={() => {this.props.handleClear()}}>
                {this.props.btnValue}
            </button>
        )
    }
}

export default ClearButton;