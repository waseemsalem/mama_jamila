import React from 'react'

const LoginForm = () => {
    return (
        <div className="login-form-container">

            <form action="">
                <h3>login form</h3>
                <input type="email" name="" placeholder="enter your email" id="" className="box" />
                <input type="password" name="" placeholder="enter your password" id="" className="box" />
                <div className="remember">
                    <input type="checkbox" name="" id="remember-me" />
                    <label htmlFor="remember-me">remember me</label>
                </div>
                <input type="submit" value="login now" className="btn" />
                {/* eslint-disable-next-line */}
                <p>forget password? <a href="#">click here</a></p>
                {/* eslint-disable-next-line */}
                <p>don't have an account? <a href="#">create one</a></p>
            </form>

        </div>
    )
}

export default LoginForm
