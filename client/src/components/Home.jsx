// Libraries
import React from "react";

// Components
import Auth from "./Authorization";
import FilterBar from "./FilterBar";
import Goal from "./Goal";

export default function Home(props) {
  const { user, setUser } = props;

  return (
    <React.Fragment>
      {!user && <Auth setUser={setUser} />}
      {user && (
        <>
          <FilterBar />
          <Goal />
        </>
      )}
    </React.Fragment>
  );
}
