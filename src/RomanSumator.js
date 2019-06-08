import React from "react";
import sumator from "./sumator";

class RomanSumator extends React.Component {
    constructor(props) {
        super(props);
        this.sumatorForm = React.createRef();
    }
    state = {
        sum: null
    }
    
    handleChange(e) {
        e.preventDefault();
        const inputs = this.sumatorForm.current.getElementsByTagName('input');
        const first = inputs[0].value;
        const second = inputs[1].value;
        this.setState({sum:sumator(first,second)})
    }

    
    render(){
        return(
            <React.Fragment>
                <form ref={this.sumatorForm} className="RomanSumator" onChange={this.handleChange.bind(this)}>
                <h1>Sum roman numbers</h1>
                <label> First number:<input type="text" ></input></label>
                <label> Second number:<input type="text"></input></label>
                <h2>Result: {this.state.sum ? this.state.sum : "none"}</h2>
                </form>
            </React.Fragment>
        )
    }
}

export default RomanSumator;