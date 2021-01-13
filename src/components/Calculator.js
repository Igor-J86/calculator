import React from 'react';
import Display from './Display';
import Button from './Button';
import ClearButton from './ClearButton';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            previousNumber: '',
            operator:''
        }
    }

    addToInput = val => {
        this.setState({ 
            input: this.state.input + val
        });
    }

    addZeroToInput = val => {
        if(this.state.input !== '') {
            this.setState({ input: this.state.input + val});
        }
    }

    addDecimal = val => {
        if(this.state.input.indexOf('.') === -1) {
            this.setState({ input: this.state.input + val});
        }
    }

    clearInput = () => {
        this.setState({
            input: '',
            previousNumber: '',
            operator:''
        });
    }

    add = () => {
        this.setState({
            input: '',
            previousNumber: this.state.input,
            operator: '+'
        });
    }

    subtract = () => {
        this.setState({
            input: '',
            previousNumber: this.state.input,
            operator: '-'
        });
    }

    multiply = () => {
        this.setState({
            input: '',
            previousNumber: this.state.input,
            operator: '*'
        });
    }

    divide = () => {
        this.setState({
            input: '',
            previousNumber: this.state.input,
            operator: '/'
        });
    }

    evaluate = () => {
        if(this.state.operator === '+') {
            this.setState({
                input: parseFloat(this.state.previousNumber) + parseFloat(this.state.input)
            });
        } else if(this.state.operator === '-') {
            this.setState({
                input: parseFloat(this.state.previousNumber) - parseFloat(this.state.input)
            });
        } else if(this.state.operator === '*') {
            this.setState({
                input: parseFloat(this.state.previousNumber) * parseFloat(this.state.input)
            });
        } else if(this.state.operator === '/') {
            this.setState({
                input: parseFloat(this.state.previousNumber) / parseFloat(this.state.input)
            });
        }

        this.setState({
            previousNumber: '',
            operator:''
        });
    }

    render() {
        return(
            <div className="calculator">
                <Display showValue={this.state.input} previousValue={this.state.previousNumber} operator={this.state.operator} />
                <div className="row">
                    <Button btnValue="7" handleClick={this.addToInput}/>
                    <Button btnValue="8" handleClick={this.addToInput}/>
                    <Button btnValue="9" handleClick={this.addToInput}/>
                    <Button btnValue="/" handleClick={this.divide}/>
                </div>
                <div className="row">
                    <Button btnValue="4" handleClick={this.addToInput}/>
                    <Button btnValue="5" handleClick={this.addToInput}/>
                    <Button btnValue="6" handleClick={this.addToInput}/>
                    <Button btnValue="&times;" handleClick={this.multiply}/>
                </div>
                <div className="row">   
                    <Button btnValue="1" handleClick={this.addToInput}/>
                    <Button btnValue="2" handleClick={this.addToInput}/>
                    <Button btnValue="3" handleClick={this.addToInput}/>
                    <Button btnValue="-" handleClick={this.subtract}/>
                </div>
                <div className="row">
                    <Button btnValue="0" handleClick={this.addZeroToInput}/>
                    <Button btnValue="." handleClick={this.addDecimal}/>
                    <Button btnValue="=" handleClick={this.evaluate}/>
                    <Button btnValue="+" handleClick={this.add}/>
                </div>
                <div className="row">
                    <ClearButton btnValue="C" handleClear={this.clearInput}/>
                </div>
            </div>
        )
    }
}
export default Calculator;