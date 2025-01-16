import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, facebookPrtovider, gitProvider, googleprovider } from './Firebase'
import "./auth.css"

const Login = () => {


  const [user, setuser] = useState(null)

  const signinwithgoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleprovider)
      const user = result.user
      setuser(user)
    } catch (error) {
      console.error(error.message)
    }
  }

  const signinwithgithub = async () => {
    try {
      const result = await signInWithPopup(auth, gitProvider)
      const user = result.user
      setuser(user)
    } catch (error) {
      console.error(error.message)
    }
  }
  const singinwithfacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookPrtovider)
      const user = result.user
      setuser(user)
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <>
      <div>

        {user ? (
          <div>
            <h1>{user.displayName}</h1>
            <img src="user.photoUrl" alt="image not found" />
            <p>{user.email}</p>
          </div>
        ) : (

          <div>
            <div class="auth-buttons">
              <div class="auth-option" onClick={signinwithgoogle}>
                <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="Google Icon" class="icon" />
                <span>Sign up with Google</span>
              </div>
              <div class="auth-option" onClick={signinwithgithub}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Icon" class="icon" />
                <span>Sign up with GitHub</span>
              </div>
              <div class="auth-option" onClick={singinwithfacebook}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="GitHub Icon" class="icon" />
                <span>Sign up with Facebook</span>
              </div>
            </div>

          </div>
        )}

      </div>

    </>
  )
}

export default Login