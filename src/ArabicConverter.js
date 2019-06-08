import React from "react";
import toArabic from "./toArabic";

class ArabicConverter extends React.Component {
    state = {
        arabic: null
    }
    handleChange = (event) => {
        const roman = event.target.value;

        this.setState({arabic:toArabic(roman)})
    }
    render(){
        return(
            <React.Fragment>
                <h1>Roman to arabic converter</h1>
                <label> Roman:<input onChange={this.handleChange} type="text"></input></label>
                <h2>Arabic: {this.state.arabic ? this.state.arabic : "none"}</h2>
            </React.Fragment>
        )
    }
}

export default ArabicConverter;