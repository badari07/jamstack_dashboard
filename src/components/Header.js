import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { Link } from "gatsby";

const Header = () => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    return (
      <>
        <header>
          <Link to="/dashboard/portfolio">Assessment</Link>
        </header>
      </>
    );
  }
  return (
    <>
      <header>
        <Link to="/">Assessment</Link>
      </header>
    </>
  );
};

export default Header;
