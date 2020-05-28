import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Blog from "../components/Blog";
import Todo from "../components/Todo";
import Login from "../components/Login";
import IdentityModal from "react-netlify-identity-widget";
import PrivateRoute from "../components/private-route";

import "react-netlify-identity-widget/styles.css";

const DashBoard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false);
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  const showModal = () => setVisibility(true);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/blog" component={Blog} />
        <PrivateRoute path="/dashboard/todo" component={Todo} />
        <Login path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};

export default DashBoard;
