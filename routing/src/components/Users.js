import React from "react";
import { NavLink } from "react-router-dom";

export class Users extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

        this.fetchUsers = this.fetchUsers.bind(this);
    }

    fetchUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    users: data
                })
            })
            .catch((err) => {
                console.log("Error fetching users", err);
            })
    }
    
    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        return(
            <div className="users">
                {
                    this.state.users.length !== 0

                    ?

                    this.state.users.map(user => {
                        return(
                            <div key={user.id}>
                                <NavLink to={"/users/" + user.id}>{user.name}</NavLink>
                            </div>
                        )
                    })

                    :

                    <h2>Loading users...</h2>
                }
            </div>
        )
    }
}


