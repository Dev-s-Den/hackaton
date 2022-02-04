// Libraries
import React from "react";

// Styles
import "./styles/Home.scss";

// Components
// import Auth from "./Authorization";
import FilterBar from "./FilterBar";
import Goal from "./Goal";

export default function Home(props) {
  return (
    <React.Fragment>
      <FilterBar />
      <Goal />
    </React.Fragment>
  );
}
