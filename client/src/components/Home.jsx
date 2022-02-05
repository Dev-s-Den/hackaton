// Libraries
import React from "react";

// Styles
import "./styles/Home.scss";

// Components
import Auth from "./Authorization";
import FilterBar from "./FilterBar";
import Goal from "./Goal";

export default function Home(props) {
  const { user, setUser } = props;

  return (
    <React.Fragment>
      {!user && <Auth setUser={setUser} user={user} />}
      {user && (
        <>
          <FilterBar />
          <Goal />
        </>
      )}
    </React.Fragment>
  );
}
