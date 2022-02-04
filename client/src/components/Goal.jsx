import React from "react";

//styles
import "./styles/Goal.scss";

// Components
import Category from "./Category";

const categories = ["Resume", "Code", "Jobs", "Applications"];

export default function Goal(props) {
  return (
    <>
      <ul className="goals-list">
        <li className="goal">
          <header className="goal-header">
            <p className="goal-title">Goal Title</p>
            <ul className="goal-categories">
              {categories.map((category) => (
                <Category key={category} name={category} />
              ))}
            </ul>
          </header>
          <section className="goal-tasks">
            <ul className="goal-tasks-list">
              <li className="goal-task">
                <label>
                  <input type="checkbox" />
                  Resume
                </label>
              </li>
              <li className="goal-task">
                <label>
                  <input type="checkbox" />
                  Research
                </label>
              </li>
              <li className="goal-task">
                <label>
                  <input type="checkbox" />
                  Cover Letter
                </label>
              </li>
            </ul>
            <section className="goal-progress">
              <p>Completed:</p>
              <progress className="progress" value="32" max="100" />
            </section>
          </section>
          <div className="time-remaining">
            <p>5 days remaining</p>
          </div>
        </li>
        <li className="goal">
          <header className="goal-header">
            <p className="goal-title">Goal Title</p>
            <ul className="goal-categories">
              {categories.map((category) => (
                <Category key={category} name={category} />
              ))}
            </ul>
          </header>
          <section className="goal-tasks">
            <ul className="goal-tasks-list">
              <li className="goal-task">
                <label>
                  <input type="checkbox" />
                  Resume
                </label>
              </li>
              <li className="goal-task">
                <label>
                  <input type="checkbox" />
                  Research
                </label>
              </li>
              <li className="goal-task">
                <label>
                  <input type="checkbox" />
                  Cover Letter
                </label>
              </li>
            </ul>
            <section className="goal-progress">
              <p>Completed:</p>
              <progress className="progress" value="32" max="100" />
            </section>
          </section>
          <div className="time-remaining">
            <p>5 days remaining</p>
          </div>
        </li>
      </ul>
    </>
  );
}
