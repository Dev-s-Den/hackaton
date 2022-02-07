import { useEffect, useState } from "react";
import axios from "axios";

// Style
import "./styles/Authorization.scss";

const example = ["Code", "Jobs", "Application", "Resume"];
export default function createGoal(props) {
  const { user } = props;
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [newGoal, setNewGoal] = useState({
    name: "",
    goal_end: "",
    categories: "",
    tasks: [],
  });
  const [newGoalData, setNewGoalData] = useState({
    name: "",
    goal_end: "",
    categories: "",
    tasks: [],
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    setNewGoal({ ...newGoalData, tasks: [task1, task2, task3] });
  };

  useEffect(() => {
    axios
      .post(`/api/goal/${user.id}`, newGoal)
      .then((data) => {
        axios
          .post(`/api/goalCategory/`, {
            goal_id: data.id,
            category_id: example.indexOf(newGoal.categories) + 1,
          })
          .then((data) => {
            axios.post(`/api/task/`, {
              goal_id: data.goal_id,
              tasks: newGoal.tasks,
            });
          });
      })
      .catch((err) => {
        console.error(err);
        return navigate("/login");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="goal">
        <form
          className="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            className="input"
            type="text"
            placeholder="name"
            name="name"
            value={newGoalData.name}
            onChange={(e) => {
              setNewGoalData({ ...newGoalData, name: e.target.value });
            }}
          />
          <input
            className="input"
            type="date"
            placeholder="Days from now"
            name="goal_end"
            value={newGoalData.goale_end}
            onChange={(e) => {
              setNewGoalData({ ...newGoalData, goal_end: e.target.value });
            }}
          />
          <label>Categories</label>
          <select
            onChange={(e) => {
              setNewGoalData({ ...newGoalData, categories: e.target.value });
            }}
            value={newGoalData.value}
          >
            {example.map((category) => {
              <option value={category}>{category}</option>;
            })}
          </select>
          <input
            className="input"
            type="text"
            placeholder="Task1"
            name="Task1"
            value={task1}
            onChange={(e) => {
              setTask1(e.target.value);
            }}
          />
          <input
            className="input"
            type="text"
            placeholder="Task2"
            name="Task2"
            value={task2}
            onChange={(e) => {
              setTask2(e.target.value);
            }}
          />
          <input
            className="input"
            type="text"
            placeholder="Task3"
            name="Task3"
            value={task3}
            onChange={(e) => {
              setTask3(e.target.value);
            }}
          />
          <button className="btn btn-primary">Create New Goal</button>
        </form>
      </section>
    </>
  );
}
