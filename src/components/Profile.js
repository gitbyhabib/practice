import React from "react";

import { Link } from "react-router-dom";

export default function Profile(props) {
  return (
    <div>
      Profile
      <Link to="/posts">Posts of Profile</Link>
    </div>
  );
}
