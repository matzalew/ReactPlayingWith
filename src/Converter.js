import React from "react";
import toRoman from "./toRoman";
import toArabic from "./toArabic";


class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeOfConverson: props.typeOfConverson,
            numOutput: null
        }
    }

    handleChange = (event) => {
        const numInput = event.target.value;

        this.state.typeOfConverson==="toRoman" ? 
            this.setState({numOutput:toRoman(numInput)}) 
                : 
            this.setState({numOutput:toArabic(numInput)})
    }

    render(){
        return( 
            this.state.typeOfConverson === "toRoman" ?
                (
                <React.Fragment>
                    <h1>Arabic to roman converter</h1>
                    <label>Arabic:<input onChange={this.handleChange} type="number"></input></label>
                    <h2>Toman: {this.state.numOutput ? this.state.numOutput : "none"}</h2>
                </React.Fragment>
                )
                    :
                (
                <React.Fragment>
                        <h1>Roman to arabic converter</h1>
                        <label>Roman:<input onChange={this.handleChange} type="text"></input></label>
                        <h2>Arabic: {this.state.numOutput ? this.state.numOutput : "none"}</h2>
                </React.Fragment>)
        )
    }
}

export default Converter;