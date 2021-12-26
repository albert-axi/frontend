import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import signupUser from "../actions/signupUser"

const SignupPage = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)

    const handleSubmit = e => {
        e.preventDefault()

        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
            password_confirmation: e.target.passwordConfirmation.value,
            name: e.target.fullName.value
        }

        dispatch(signupUser(user))
    }

    useEffect(()=> user && !user.errors ? navigate('/posts') : null, [user])

    const renderErrors = ()=>{
        // console.log(user.errors)
        return Object.keys(user.errors).map(error => (<li>{`${error} - ${user.errors[error].join(', ')}`}</li>))
    }

    return(
        <>
            <h1>Signup Page</h1>
            {user?.errors ? <ul>{renderErrors()}</ul>: null}
            <form onSubmit={handleSubmit}>
                <input id="fullName" type="text" placeholder="name" /><br/>
                <input id="email" type="text" placeholder="email@email.com" /><br/>
                <input id="password" type="password" placeholder="Password" /><br/>
                <input id="passwordConfirmation" type="password" placeholder="Password Confirmation" /><br/>
                <input type="submit" />
            </form>
        </>
    )
}

export default SignupPage