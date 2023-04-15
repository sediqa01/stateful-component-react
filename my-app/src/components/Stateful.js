import React from "react";

class Stateful extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            instorduction: "Heya!",
            buttonText: "Exit",
        }
    }
    handleClick(){
        this.setState({
            instorduction: "Goodebye!",
            buttonText: "Enter",
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.instorduction} {this.props.greetings}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default Stateful;