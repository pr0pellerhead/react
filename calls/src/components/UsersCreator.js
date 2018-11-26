import React from "react";

export class UsersCreator extends React.Component {
    render () {
        return(
            <div className="users-creator">
                <form onSubmit={this.props.createUser}>
                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.firstname} name="firstname" type="text" placeholder="First Name"/>
                    </p>


                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.lastname} name="lastname" type="text" placeholder="Last Name"/>
                    </p>

                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.password} name="password" type="password" placeholder="Password"/>
                    </p>
                    
                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.email} name="email" type="text" placeholder="E-mail"/>
                    </p>

                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.role} name="role" type="text" placeholder="Role"/>
                    </p>

                    <p>
                        <input type="submit" value="Add User"/>
                    </p>
                </form>          
            </div>
        )
    }
}