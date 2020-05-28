import React from "react";
import { Link } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

const Profile = ({ showModal }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;
  const name =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name;

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/blog" activeClassName="active">
            Blog
          </Link>
          <Link to="/dashboard/todo" activeClassName="active">
            Todo
          </Link>
        </nav>
        <span>
          Logged in as {name}. <button onClick={showModal}>log out</button>
        </span>
      </div>
    )
  );
};

export default Profile;
