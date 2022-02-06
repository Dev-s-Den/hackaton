import React, { useEffect, useState } from "react";
import axios from "axios";

import Category from "./Category";
import Task from "./Task";

import { calculateTime } from "./helpers/goalHelper";

export default function Goal(props) {
  const { goal } = props;
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`/api/task/${goal.id}`),
      axios.get(`/api/category/${goal.id}`),
    ]).then((data) => {
      setTasks([...data[0].data]);
      setCategories([...data[1].data]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li className="goal" key={goal.id}>
      <header className="goal-header">
        <p className="goal-title">{goal.name}</p>
        <ul className="goal-categories">
          {categories.map((category) => {
            return (
              <Category
                key={`${goal.id}-${category.name}`}
                color={category.color}
                name={category.name}
              />
            );
          })}
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
