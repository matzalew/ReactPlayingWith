import React from "react";
import toRoman from "./toRoman";

class RomanConverter extends React.Component {
    state = {
        roman: null
    }
    handleChange = (event) => {
        const arabic = event.target.value;
        this.setState({roman:toRoman(arabic)})
    }
    render(){
        return(
            <React.Fragment>
                <h1>Arabic to roman converter</h1>
                <label> Arabic:<input onChange={this.handleChange} type="number"></input></label>
                <h2>Roman: {this.state.roman ? this.state.roman : "none"}</h2>
            </React.Fragment>
        )
    }
}

export default RomanConverter;