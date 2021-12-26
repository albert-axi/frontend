export default function signupUser({email, password, password_confirmation, name}) {
    return (dispatch) => {
        dispatch({ type: 'SIGNUP_REQUEST' });


        fetch('http://localhost:3000/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user: {
                    email,
                    password,
                    password_confirmation,
                    name
                }
            })
        })
            .then(res => res.json())
            .then(res => {
                if(!res?.errors) {
                    localStorage.setItem('jwt', res.jwt)
                    dispatch({ type: 'SIGNUP_USER', user: res.user })
                } else {
                    dispatch({ type: 'SIGNUP_USER', user: {...res.user,errors: res.errors}})
                }
            })
    };
}