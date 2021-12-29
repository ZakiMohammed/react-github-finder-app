const API_URL = process.env.REACT_APP_GITHUB_API
const API_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const API_ROUTES = {
    SEARCH: 'search',
    USERS: 'users'
}

const options = {
    headers: {
        'Authorization': `token ${API_TOKEN}`
    }
};

export const getUsers = async () => {
    const response = await fetch(`${API_URL}${API_ROUTES.USERS}`, options)
    const data = await response.json()
    return { response, data };
}

export const getUser = async (login) => {
    const response = await fetch(`${API_URL}${API_ROUTES.USERS}/${login}`, options)
    const data = await response.json()
    return { response, data };
}

export const searchUsers = async (q) => {
    const response = await fetch(`${API_URL}${API_ROUTES.SEARCH}/${API_ROUTES.USERS}?q=${q}`, options)
    const data = await response.json()
    return { response, data };
}
