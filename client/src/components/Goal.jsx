import React, { useEffect, useState } from "react";
import axios from "axios";

//styles
import "./styles/Goal.scss";

// Components
import Category from "./Category";

const categories = ["Resume", "Code", "Jobs", "Applications"];

// Helpers
const calculateTime = (time) => {
  const today = new Date();
  const date2 = new Date(time);
  const timeRemaining =
    (date2.getTime() - today.getTime()) / (1000 * 3600 * 24);
  if (timeRemaining !== 0) {
    if (timeRemaining !== 1) {
      return `${timeRemaining.toFixed()} days remaining`;
    }
    return `${timeRemaining.toFixed()} day remaining`;
  }
  return `0 days remaining`;
};

export default function Goal(props) {
  const { user } = props;

  // States
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    axios.get(`/api/goal/${user.id}`).then((data) => {
      console.log(data.data);
      setGoals([...data.data]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ul className="goals-list">
        <li className="goal" key="fuckyou">
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
        {goals.map((goal) => {
          return (
            <li className="goal" key={goal.id}>
              <header className="goal-header">
                <p className="goal-title">{goal.name}</p>
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
                <p>{calculateTime(goal.goal_end)}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
