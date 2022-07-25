import React, { Component } from 'react'
import '../css/Login.css'

export class Login extends Component {
    render() {
        return (
            <div className="login-page container">
                <div className="signup">
                    <form>
                        <input type="text" placeholder="First:" required />
                        <input type="text" placeholder="Last:" required />
                        <input type="text" placeholder="Email:" required />
                        <input type="text" placeholder="Phone:" required />
                        <input type="submit" placeholder="SUBMIT" />
                    </form>
                </div>
                <iframe src="https://www.youtube.com/embed/kkP_G_YwvpU?autoplay=1" width={640} height={367} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>


        )
    }
}

export default Login