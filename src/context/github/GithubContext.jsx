import { createContext, useReducer } from 'react'
import gitHubReducer from './GithubReducer'
import * as action from './GithubAction'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(gitHubReducer, initialState)

    const value = {
        ...state,
        dispatch,
    }

    return (
        <GithubContext.Provider value={value}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
