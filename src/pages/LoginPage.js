import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import loginUser from "../actions/loginUser"
import { useEffect } from "react"

const LoginPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = e => {
        e.preventDefault()

        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        dispatch(loginUser(user))
    }

    useEffect(()=> user && !user.errors ? navigate(from, { replace: true }) : null, [user])

    const renderErrors = ()=>{
        // console.log(user.errors)
        return Object.keys(user.errors).map(error => (<li>{`${error} - ${user.errors[error].join(', ')}`}</li>))
    }

    return (
        <>
            <h1>Login Page</h1>
            {user?.errors ? <ul>{renderErrors()}</ul>: null}
            <form onSubmit={handleSubmit}>
                <input id="email" type="text" placeholder="email@email.com" />
                <input id="password" type="password" placeholder="Password" />
                <input type="submit" />
            </form>
        </>
    )
}

export default LoginPage