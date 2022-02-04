// Libraries
import React from "react";

// Styles
import "./styles/Home.scss";

// Components
import Auth from "./Authorization";

export default function Home(props) {
  return (
    <React.Fragment>
      <h1 className="title">Welcome to Hackaton!</h1>
      <Auth />
    </React.Fragment>
  );
}
