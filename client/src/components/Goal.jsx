import React, { useEffect, useState } from "react";
import axios from "axios";

import Category from "./Category";

import { calculateTime } from "./helpers/goalHelper";

const categories = ["1", "2", "3"];
export default function Goal(props) {
  const { goal } = props;
  const [tasks, setTasks] = useState([]);
  console.log(props);

  useEffect(() => {
    axios.get(`/api/task/${goal.id}`).then((data) => {
      console.log(data[0]);
    });
  });

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
          {tasks.map((task, index) => {
            return (
              <li className="goal-task" key={index}>
                <label>
                  <input type="checkbox" checked={task.completed} />
                  {task.name}
                </label>
              </li>
            );
          })}

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
}
