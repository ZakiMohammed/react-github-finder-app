import axios from 'axios'

const API_URL = process.env.REACT_APP_GITHUB_API
const API_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const API_ROUTES = { SEARCH: 'search', USERS: 'users' }

const axiosGitHub = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `token ${API_TOKEN}`
    }
})

export const getUsers = async () => {
    const response = await axiosGitHub.get(`${API_ROUTES.USERS}`)
    return response.data;
}

export const getUser = async (login) => {
    const response = await axiosGitHub.get(`${API_ROUTES.USERS}/${login}`)
    return response.data;
}

export const getUserRepos = async (login) => {
    const response = await axiosGitHub.get(`${API_ROUTES.USERS}/${login}/repos`)
    return response.data;
}

export const searchUsers = async (q) => {
    const response = await axiosGitHub.get(`${API_ROUTES.SEARCH}/${API_ROUTES.USERS}?q=${q}`)
    return response.data;
}

export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([getUser(login), getUserRepos(login)])
    return { user, repos };
}
