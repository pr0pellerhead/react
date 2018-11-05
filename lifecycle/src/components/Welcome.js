import React from "react";

export class Welcome extends React.Component {

    componentWillUnmount() {
        console.log("Welcome will unmount");
    }

    render() {
        return (
            <div>
                <h2>Hello, {this.props.name}</h2>
            </div>
        )
    }
}