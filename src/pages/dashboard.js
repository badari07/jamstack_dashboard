import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Portfolio from "../components/Portfolio";
import Todo from "../components/Todo";
import Login from "../components/Login";

const DashBoard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);
  return (
    <Layout>
      <Profile />
      <Router>
        <Portfolio path="/dashboard/profile" />
        <Todo path="/dashboard/todo" />
        <Login path="/dashboard/login" />
      </Router>
    </Layout>
  );
};

export default DashBoard;
