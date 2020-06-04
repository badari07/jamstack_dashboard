import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <>
      <h1>Instructions to use App.</h1>
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
      <h1>Instructions to Run App.</h1>
      <ol>
        <li>
          <p>
            After Cloning or downloading zip file, Run{" "}
            <b>yarn or npm install</b> for downloading the dependencies of
            project.
          </p>
        </li>
        <li>
          <p>
            <b>yarn add netlify-cli / npm i netlify-cli </b>. After installing
            run <b>netlify login</b>. You should to register to netlify.
          </p>
        </li>
        <li>
          <p>
            Then, run <b>netlify dev</b>. To run the App in development mode.
          </p>
        </li>
        <li>
          <p>
            You can view the App in{" "}
            <u>
              <b>'http://localhost:8888'</b>
            </u>
          </p>
        </li>
        <li>
          <p>
            You can read it in <b>README.md</b> file inside the project app.
          </p>
        </li>
      </ol>
    </>
  </Layout>
);
