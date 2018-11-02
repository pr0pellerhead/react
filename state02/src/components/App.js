import React from "react";
import { Password } from "./Password";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            dob: "",
            password: "",
            count: 1,
            type: "password"
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.changeInputType = this.changeInputType.bind(this)
    }

    handleChange(e) {
        this.setState({
           [e.target.name]: e.target.value,
        })
    }

    submitForm(e) {
        e.preventDefault();

        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            dob: this.state.dob,
            password: this.state.password,
        }

        console.log(data);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }

    changeInputType() {
        this.setState({
            type: this.state.type === "password" ? "text" : "password"
        })
    }

    render() {
        return (
            <div id="app">
                <form onSubmit={this.submitForm}>
                    <p>
                        <input onChange={this.handleChange} value={this.state.firstName} name="firstName" type="text" placeholder="First Name"/>
                    </p>

                    <p>
                        <input onChange={this.handleChange} value={this.state.lastName} name="lastName" type="text" placeholder="Last Name"/>
                    </p>

                    <p>
                        <input onChange={this.handleChange} value={this.state.email} name="email" type="text" placeholder="E-mail"/>
                    </p>

                    <p>
                        <input onChange={this.handleChange} value={this.state.dob} name="dob" type="date"/>
                    </p>

                    <Password
                        type={this.state.type}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        changeInputType={this.changeInputType}
                    />

                    <p>
                        <input type="submit" value="Register"/>
                    </p>
                </form>
                
                <div className="incrementer">
                    <button onClick={this.increment} className="plus">+</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.decrement} className="minus">-</button>
                </div>
            </div>
        )
    }
}