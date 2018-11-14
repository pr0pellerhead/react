export const fetchUser = () => {
    return {
        type: "GET_USER",
        payload: {
            name: "Mario Petkovski",
            mail: "mario5etkovski@gmail.com"
        }
    }
}