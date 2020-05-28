import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <h1>This is JAMstack Site</h1>
    <p>Log in to view</p>
    <Link to="/dashboard">Dashboard</Link>
  </Layout>
);
