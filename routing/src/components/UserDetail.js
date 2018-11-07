import React from "react";

export class UserDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
        
        this.fetchUser =  this.fetchUser.bind(this);
       
    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser() {
        fetch("https://jsonplaceholder.typicode.com/users/" + this.props.match.params.id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    user: data
                }, () => {
                    console.log(this.state.user.name);   
                })
            })
            .catch((err) => {
                console.log("Error fetching users", err);
            })
    }

    render() {
        return(
            <div className="user-detail">
                {
                    this.state.user !== null
                    
                    ?
                        <div>
                            <h2>{this.state.user.name}</h2>
                            <span>{this.state.user.username}</span> <br/>
                            <a href={"mailto:" + this.state.user.email}>{this.state.user.email}</a> <br/>
                            <a href={this.state.user.website}>{this.state.user.website}</a> <br/>
                            <span>She works for:</span>
                            <h2>{this.state.user.company.name} </h2>
                            <span>She lives in:</span>
                            <h2>{this.state.user.address.street}, {this.state.user.address.suite} in {this.state.user.address.city}</h2>
                        </div>

                    :

                    <h2>Loading data...</h2>
                }
                
            </div>
        )
    }
}