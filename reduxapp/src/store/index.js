import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
    technology: "React",
    technologies: ["React", "Angular", "Vue"],
    user: {
        name: "Mario Petkovski",
        email: "mario5etkovski@gmail.com"
    }
}

export const store = createStore(reducer, initialState);