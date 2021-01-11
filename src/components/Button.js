import React from 'react';

class Button extends React.Component {
    isOperator = val => {
        return !isNaN(val) || val === '.' || val === '=';
    }
    render() {
        return(
            <button 
                className={`calc-btn ${this.isOperator(this.props.btnValue) ? "" : "operator"}`} 
                onClick={() => {this.props.handleClick(this.props.btnValue)}}>
                {this.props.btnValue}
            </button>
        )
    }
}

export default Button;