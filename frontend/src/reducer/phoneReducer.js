const auth = (state = false, action) => {
    switch (action.type) {
        case "CREATE_PHONE":
            return state = action.payload

        default:
            return state

    }
}



export default auth