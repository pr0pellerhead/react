export default (state, action) => {
    switch(action.type) {
        case "SET_TECHNOLOGY" :
            return {
                // Spread operator, sluzat za kopiranje/pravenje referenca od originalniot state, bidejki ne smeeme NIKOGAS da go menuvame direktno
                ...state,
                technology: action.payload
            }
            default: return state;
    }
}

