import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import loginUser from "../actions/loginUser"
import { useEffect } from "react"

const LoginPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const handleSubmit = e => {
        e.preventDefault()

        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        dispatch(loginUser(user))
    }

    useEffect(()=> user ? navigate('/posts') : alert("Please Login"), [user])

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input id="email" type="text" placeholder="email@email.com" />
                <input id="password" type="password" placeholder="Password" />
                <input type="submit" />
            </form>
        </>
    )
}

export default LoginPage