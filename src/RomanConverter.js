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
                <label> Arabic:<input onChange={this.handleChange} type="number"></input></label>
                <h1>Roman: {this.state.roman ? this.state.roman : "none"}</h1>
            </React.Fragment>
        )
    }
}

export default RomanConverter;