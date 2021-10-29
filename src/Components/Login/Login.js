import React from 'react'
import {GoogleOutlined} from "@ant-design/icons"
import 'firebase/app'
import firebase from 'firebase/compat/app'

import { auth } from '../../firebase'

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome This Is Sanket Bagad</h2>
                <p>For Any Projects or job related Stuff, just login and send the query or can also whatsapp me the details about it</p>
                <div
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                className="login-button google">
                    <GoogleOutlined /> Sign In with Google
                </div>
            </div>
        </div>
    )
}

export default Login