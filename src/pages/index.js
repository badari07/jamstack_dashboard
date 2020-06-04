import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default () => (
  <>
    <Layout>
      <h1>App with rules</h1>
      <p>Log in view</p>
      <Link to="/dashboard" className="button-dashboard">
        <span>Dashboard </span>
      </Link>
    </Layout>
  </>
);
