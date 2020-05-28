import React from "react";
import { Link } from "gatsby";

const Profile = () => {
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/profile" activeClassName="active">
          Portfolio
        </Link>
        <Link to="/dashboard/todo" activeClassName="active">
          Todo
        </Link>
      </nav>
      <span>Todo to login</span>
    </div>
  );
};

export default Profile;
