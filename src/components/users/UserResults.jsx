import { useContext } from 'react'
import GithubContext from '../../context/GithubContext'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

const UserResults = () => {

    const { users, loading } = useContext(GithubContext)

    return (
        loading ? <Spinner></Spinner> :
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map(user => (
                    <UserItem key={user.id} user={user}></UserItem>
                ))}
            </div>
    )
}

export default UserResults
