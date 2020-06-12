export const setToken = (token) => {
    localStorage.setItem('token', token);
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const isLogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}