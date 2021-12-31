import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import * as action from '../../context/github/GithubAction'

const UserSearch = () => {

    const { dispatch } = useContext(GithubContext)
    const { showAlert } = useContext(AlertContext)
    const [text, setText] = useState('')

    const handleText = (e) => setText(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (text) {
            dispatch({ type: 'SET_LOADING' })

            const data = await action.searchUsers(text);

            dispatch({
                type: 'GET_USERS',
                payload: data.items
            })
        } else {
            showAlert({ type: 'error', message: 'Please enter something' })
        }
    }
    const handleClear = () => dispatch({ type: 'CLEAR' })

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <div className='relative'>
                            <input
                                type="text"
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Search'
                                value={text}
                                onChange={handleText} />
                            <button
                                type='submit'
                                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <button className='btn btn-ghost btn-lg' onClick={handleClear}>
                    Clear
                </button>
            </div>

        </div>
    )
}

export default UserSearch
