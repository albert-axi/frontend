import { useNavigate } from "react-router-dom"

const LoginPage = () => {

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user: {
                    email: e.target.email.value,
                    password: e.target.password.value
                }
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                localStorage.setItem('user', JSON.stringify(res.user))
                localStorage.setItem('jwt', res.jwt)

                navigate('/posts')
            })
    }

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