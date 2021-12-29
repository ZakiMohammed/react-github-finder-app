import { useState, useContext } from 'react'
import GithubContext from '../../context/GithubContext'
import AlertContext from '../../context/AlertContext'

const UserSearch = () => {

    const { search, clear } = useContext(GithubContext)
    const { showAlert } = useContext(AlertContext)
    const [text, setText] = useState('')

    const handleText = (e) => setText(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (text) {
            search(text)
        } else {
            showAlert({ type: 'error', message: 'Please enter something' })
        }
    }
    const handleClear = (e) => clear()

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
