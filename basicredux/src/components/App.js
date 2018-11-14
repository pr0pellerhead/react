import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/UserAction";

export class App extends React.Component {

    componentDidMount() {
        this.props.zemiMe();
    }

    render() {
        return (
            <div>
                <h2>Hello, {this.props.jas.name}</h2>
                {this.props.cv.askdjsa}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jas: state.userReducer.user,
        cv: state.userReducer.cv
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        zemiMe: () => {
            dispatch(fetchUser());
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);