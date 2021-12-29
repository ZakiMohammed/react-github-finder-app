import { createContext, useReducer } from 'react'
import * as services from '../services/users'
import gitHubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(gitHubReducer, initialState)

    const search = async (text) => {

        dispatch({ type: 'SET_LOADING' })

        const { data } = await services.searchUsers(text);

        dispatch({
            type: 'GET_USERS',
            payload: data.items
        })
    }
    const getUser = async (login) => {

        dispatch({ type: 'SET_LOADING' })

        const { data } = await services.getUser(login);

        dispatch({
            type: 'GET_USER',
            payload: data
        })
    }
    const clear = () => dispatch({ type: 'CLEAR' })

    const value = {
        users: state.users,
        loading: state.loading,
        user: state.user,
        search,
        clear,
        getUser,
    }

    return (
        <GithubContext.Provider value={value}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
