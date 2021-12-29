const gitHubReducer = (state, { type, payload }) => {
    switch (type) {
        case 'GET_USERS':
            return {
                ...state,
                users: payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR':
            return {
                ...state,
                users: [],
                loading: false
            }
        default:
            return state
    }
}

export default gitHubReducer