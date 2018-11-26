import React from "react";
import axios from "axios";

import { UsersCreator } from "./UsersCreator";
import { UsersTable } from "./UsersTable";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstname: "",
                lastname: "",
                email: "",
                role: "",
                password: ""
            },
            users: []
        }

        this.handleUserOnChange = this.handleUserOnChange.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.startEdit = this.startEdit.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    handleUserOnChange(e) {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    };

    fetchUsers() {
       axios.get("http://localhost:80/users")
            .then((res) => {
                this.setState({
                    users: res.data
                });
            })
            .catch((err) => {
                console.log("Error fetching users", err);
            });
    }

    deleteUser(userId) {
        axios.delete("http://localhost:80/users/" + userId)
            .then((res) => {
                this.fetchUsers();
            })
            .catch((err) => {
                console.log("Error deleting user", err);
            })
    }

    createUser(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:80/users/',
            data: this.state.user
          })
            .then((res) => {
                this.fetchUsers();
            })
            .catch((err) => {
                console.log("Error deleting user", err);
            })
    }

    startEdit(user) {
        console.log(user);
        this.setState({
            user: {
                ...this.state.user,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
                password: user.password
            }
        })
    }

    render () {
        return(
            <div id="app-container">
                <UsersCreator 
                    user={this.state.user} 
                    handleUserOnChange={this.handleUserOnChange}
                    createUser={this.createUser}
                />
                <UsersTable 
                    users={this.state.users}
                    deleteUser={this.deleteUser}
                    startEdit={this.startEdit}
                />
            </div>
        )
    }
}