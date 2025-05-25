import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { app } from "../../../firebase.login";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";

const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();

function Signup() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuth).then((res) => {
      setUser(res.user);
    });
  };
  console.log(user);
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Navbar />
      <center className="signup">
        {/* <h1>Signup</h1> */}
        {/* <form className="forms" >
          <input type="email" name="email" id="email" placeholder="Email" />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <br />
          <button>Signup</button>
        </form> */}

        <button className="mb-5 btn btn-primary" onClick={signInWithGoogle}>
          SignIn With Google
        </button>
      </center>
      <Footer />
    </>
  );
}

export default Signup;
