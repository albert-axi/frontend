export default function userReducer(user = null, action) {
    switch(action.type) {
        case 'LOGIN_REQUEST':
            return user
        case 'LOGIN_USER':
            return {...action.user}
        case 'LOGOUT_USER':
            localStorage.removeItem('jwt')
            return null
        default:
            return user
    }
}