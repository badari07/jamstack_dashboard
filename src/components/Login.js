import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { navigate } from "gatsby";

const Login = ({ showModal }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/portfolio", { replace: true });
  }

  // <h1>Log In or Sign Up</h1>
  //     <button onClick={showModal}>Log In</button>
  return (
    <>
      <div className="content logged-out">
        <h1>Super Secret Stuff!</h1>
        <p>🔐 only my bestest friends can see this content</p>
        <button className="login" onClick={showModal}>
          log in / sign up to be my best friend
        </button>
      </div>
      <div className="content logged-in">
        <div className="secret-stuff"></div>
        <button className="logout">log out</button>
      </div>
    </>
  );
};

export default Login;
