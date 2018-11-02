import React from "react";

export const Password = (props) => {
    return (
        <p>
            <input 
                onChange={props.handleChange} 
                value={props.password} 
                name="password" 
                type={props.type} 
                placeholder="Password"
            />
            <span onClick={props.changeInputType} className="reveal-pass">
                <i className={"far fas " + (props.type === "password" ? "fa-eye-slash" : "fa-eye")}></i>
            </span>
        </p>
    )
}