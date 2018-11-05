import React from "react";
import { Welcome } from "./Welcome";
import { Users } from "./Users";
import { Clock } from "./Clock";
import { Orders } from "./Orders";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showWelcome: true,
            users: [],
            name: "",
            date: "",
            number: "",
            status: false,

            orders: [
                {
                    id: 1,
                    order_name: "Sample order",
                    order_date: "05/11/2018",
                    order_status: false
                },
                {
                    id: 2,
                    order_name: "Perooo",
                    order_date: "02/11/2018",
                    order_status: true
                },
                {
                    id: 3,
                    order_name: "Naracka",
                    order_date: "16/11/2018",
                    order_status: false
                },
            ]
        }

        this.toggleHome = this.toggleHome.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);

        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component Will mount");
    }

    componentDidMount() {
        console.log("Component Did Mount");
        this.fetchUsers();
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component Update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component Will Update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    toggleHome() {
        this.setState({
            showWelcome: !this.state.showWelcome
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addItem(e) {
        e.preventDefault();

        let data = {
            id: this.state.number,
            order_name: this.state.name,
            order_date: this.state.date,
            order_status: this.state.status,
        }

        this.setState({
            orders: [
                ...this.state.orders,
                data
            ],
            name: "",
            date: "",
            number: "",
            status: false,
        })
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
                console.log("Error fetching data", err);
            })
    }

    render() {
        return (
            <div>
               { this.state.showWelcome ? <Welcome name="Mario" /> : null }
               <button onClick={this.toggleHome}>(Un)mount component</button>

               <Users data={this.state.users} />
               <Clock />

               <form onSubmit={this.addItem}>
                   <p>
                       <input value={this.state.number} onChange={this.handleChange} type="text" name="number" placeholder="Order Number" />
                   </p>
                   <p>
                       <input value={this.state.name} onChange={this.handleChange} type="text" name="name" placeholder="Order Name" />
                   </p>
                   <p>
                       <input value={this.state.date} onChange={this.handleChange} type="text" name="date" placeholder="Order Date" />
                   </p>
                   <p>
                       <input value={this.state.status} checked={this.state.status} onChange={this.handleChange} type="checkbox" name="status" />
                   </p>

                   <p>
                       <input type="submit" value="SEND" />
                   </p>
               </form>
               <Orders orders={this.state.orders} />
            </div>
        )
    }
}


