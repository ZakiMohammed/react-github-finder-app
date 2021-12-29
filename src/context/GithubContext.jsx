import { createContext, useReducer } from 'react'
import { searchUsers } from '../services/users'
import gitHubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(gitHubReducer, initialState)

    const search = async (text) => {

        dispatch({ type: 'SET_LOADING' })

        const { data } = await searchUsers(text);

        dispatch({
            type: 'GET_USERS',
            payload: data.items
        })
    }
    const clear = () => dispatch({ type: 'CLEAR' })

    const value = {
        users: state.users,
        loading: state.loading,
        search,
        clear
    }

    return (
        <GithubContext.Provider value={value}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
