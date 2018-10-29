import React from "react";
import { Welcome } from "./Welcome";
import avatar from "../assets/images/user.jpg";
import { Comment } from "./Comment";
import { HasVacancy } from "./HasVacancy";

export class App extends React.Component {
    render() {

        let user = {
            name: "Mario Petkovski",
            email: "mario5etkovski@gmail.com"
        }

        let author = {
            first_name: "Mario",
            last_name: "Petkovski",
            e_mail: "mario5etkovski@gmail.com",
            image_url: avatar
        }

        let comment = {
            text: "This is a sample comment. Lorem ipsum...",
            date: "29/10/2018"
        }

        return (
            <div>
                {/* <Welcome 
                    name="Mario Petkovski"
                    email="mario5etkovski@gmail.com"
                 /> */}
                 {/* <Welcome user={user} /> */}

                <Comment 
                    author={author}
                    comment={comment}
                />

                <HasVacancy availability={false} />
            </div>
        )
    }
}