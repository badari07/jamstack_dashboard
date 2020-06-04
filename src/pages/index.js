import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <>
      <h1>Instructions to use App</h1>
      <Link to="/dashboard" className="button-dashboard">
        <span>DashBoard </span>
      </Link>
      <ol>
        <li>
          <p>
            First click on{" "}
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              Dashboard
            </Link>
            , it goes to Login page.
          </p>
        </li>
        <li>
          <p>Then,Click on Log In / Sign Up button.</p>
        </li>
        <li>
          <p>
            If you already <b>Register </b> with this app you can <b>Log in</b>{" "}
            with your e-mail ID and Password.
          </p>
        </li>
        <li>
          <p>
            OtherWise you have to <b>Register </b> First by <b>Sign up </b>and
            confirm your e-mail address. Then you can Log In to app.
          </p>
        </li>
      </ol>
    </>
  </Layout>
);
