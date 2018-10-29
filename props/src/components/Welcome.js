import React from "react";

export class Welcome extends React.Component {
    render() {
        return(
            <div>
                <h2>
                    Hello {this.props.user.name}. You are logged in with 
                    <a href="#">{this.props.user.email}</a>
                </h2>
            </div>
        )
    }
}