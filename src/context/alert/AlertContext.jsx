import { createContext, useReducer } from 'react'
import AlertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {

    const initialState = {
        message: '',
        type: ''
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const showAlert = (payload) => {
        dispatch({
            type: 'SET_ALERT',
            payload
        })

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 2000);
    }

    return (
        <AlertContext.Provider value={{
            alert: state,
            showAlert
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext
