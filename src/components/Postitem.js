import React from "react";

export default function postitem(props) {
  console.log("");
  return <div>{props.match.params.id}</div>;
}
