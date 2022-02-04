// Libraries
import React from "react";

// Style
import "./styles/FilterBar.scss";

// Components
import Category from "./Category";

// Mock database
const categories = ["Resume", "Code", "Jobs", "Applications"];

export default function FilterBar(props) {
  return (
    <React.Fragment>
      <section className="filter_bar">
        <ul className="categories">
          {categories.map((c) => (
            <Category key={c} name={c} />
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}
