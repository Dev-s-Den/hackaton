import React from "react";

//styles 
import "./styles/Goal.scss";

export default function Goal(props) {

  return(
    <React.Fragment>
      <section >
        <div class='goal'>
          <p> content of the goal</p>
          <p class='time'>5 days remaining</p>
        </div>
      </section>
    </React.Fragment>
  )
}