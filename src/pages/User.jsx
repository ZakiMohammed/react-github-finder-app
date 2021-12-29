import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/GithubContext'

const User = () => {

    const params = useParams()
    const { user, getUser } = useContext(GithubContext)

    useEffect(() => {
        getUser(params.login)        
    }, [])

    return (
        <div>
            {user.login}
        </div>
    )
}

export default User
