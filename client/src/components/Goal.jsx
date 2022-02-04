import React from "react";

//styles 
import "./styles/Goal.scss";

export default function Goal(props) {

  return(
    <>
      <section >
        <div className='goal'>
          <div className='goal-header'>
            <p> content of the goal</p>
          </div>
          <div className='goal-content'>
            <div className="category">
              <label>
                <input type='checkbox'/>
                Resume
              </label>           
              <label>
              <input type='checkbox'/>
                Research
              </label>
              <label>
              <input type='checkbox'/>
              Cover Letter
              </label>
            </div>
            <div className='progress'>
              <p>{0/5}</p>
            </div>
          </div>
          <div className='time'>
            <p>5 days remaining</p>
          </div>
        </div>
      </section>
    </>
  )
}