import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import * as action from '../context/github/GithubAction'
import UserProfile from '../components/users/UserProfile'
import UserRepos from '../components/users/UserRepos'
import Spinner from '../components/layout/Spinner'

const User = () => {

    const params = useParams()
    const { dispatch, user, repos, loading } = useContext(GithubContext)

    useEffect(async () => {
        dispatch({ type: 'SET_LOADING' })

        const data = await action.getUserAndRepos(params.login);

        dispatch({
            type: 'GET_USER_AND_REPOS',
            payload: data
        })
    }, [dispatch, params.login])

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <div className='w-full mx-auto lg:w-10/12'>
                <div className='mb-4'>
                    <Link to='/' className='btn btn-ghost'>
                        Back To Search
                    </Link>
                </div>

                <UserProfile user={user} />
                <UserRepos repos={repos} />
            </div>
        </>
    )
}

export default User
