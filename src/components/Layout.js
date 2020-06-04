import React from "react";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import Header from "./Header";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider url="https://jamstack-dash.netlify.app">
      <Header />
      <main>{children}</main>
    </IdentityContextProvider>
  );
};

export default Layout;
