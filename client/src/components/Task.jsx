import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Task(props) {
  const { task } = props;
  const [checkbox, setCheckbox] = useState(task);

  const boxChange = function (e, setCheckbox) {
    setCheckbox({ completed: e.target.checked });
  };

  useEffect(() => {
    axios.put(`/api/task/${task.id}`, checkbox).then((data) => {});
  }, [boxChange]);

  return (
    <li className="goal-task">
      <label>
        <input
          type="checkbox"
          checked={checkbox.completed}
          onChange={(e) => boxChange(e, setCheckbox)}
        />
        {task.name}
      </label>
    </li>
  );
}
