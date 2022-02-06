import React, { useEffect, useState } from "react";
import axios from "axios";

import Category from "./Category";
import Task from "./Task";

import { calculateTime } from "./helpers/goalHelper";

const categories = ["1", "2", "3"];
export default function Goal(props) {
  const { goal } = props;
  const [tasks, setTasks] = useState([]);
  console.log(goal.id);

  useEffect(() => {
    axios.get(`/api/task/${goal.id}`).then((data) => {
      setTasks([...data.data]);
    });
  }, []);

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
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
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
