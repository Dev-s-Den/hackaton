import React, { useEffect, useState } from "react";
import axios from "axios";

//styles
import "./styles/Goals.scss";

// Component
import Goal from "./Goal";

export default function Goals(props) {
  const { user } = props;

  // States
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    axios.get(`/api/goal/${user.id}`).then((data) => {
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
            <ul className="goal-categories"></ul>
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
          return <Goal key={goal.id} goal={goal} />;
        })}
      </ul>
    </>
  );
}
