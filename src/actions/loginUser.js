export default function loginUser({email, password}) {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_REQUEST' });


        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user: {
                    email,
                    password
                }
            })
        })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('jwt', res.jwt)
                dispatch({ type: 'LOGIN_USER', user: res.user })
            })
    };
}