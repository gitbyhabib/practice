import React from "react";

import { Link } from "react-router-dom";

export default function Profile(props) {
  return (
    <div>
      Profile
      <Link to={{ pathname: `$ {props.match.url}/posts` }}>
        Posts of Profile
      </Link>
    </div>
  );
}
