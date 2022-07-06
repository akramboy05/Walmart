const auth = (state = false, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return state = action.payload
        default:
            return state

    }
}

export default auth



