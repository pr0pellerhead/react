import React from "react";
import { Avatar } from "./Avatar";

export const UserInfo = (props) => {
    return (
        <div className="user-info">
            <Avatar data={props.data} />
                    
            <h2>{props.data.first_name} {props.data.last_name}</h2>
            <a href={"mailto:" + props.data.e_mail}>{props.data.e_mail}</a> <br/> <br/>
        </div>
    )
}