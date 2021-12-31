import RepoItem from './RepoItem'
import PropTypes from 'prop-types'

const UserRepos = ({ repos }) => {
    return (
        <>
            {repos.map(repo => (
                <RepoItem key={repo.id} repo={repo} />
            ))}
        </>
    )
}

UserRepos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default UserRepos
