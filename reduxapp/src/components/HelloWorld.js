import React from "react";

export class HelloWorld extends React.Component {
    render() {
        return(
            <h2>My name is {this.props.user.name} and I'm learning {this.props.technology}.</h2>
        )
    }
}