// Libraries
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

// Style
import "./styles/Authorization.scss";

export default function Auth(props) {
  const { setUser } = props;
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("/api/user/", userData).then((data) => {
      setUser({ ...data.data });
      return <Navigate to="/" />;
    });
  };

  // Functions
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div className="home">
        <section className="text">
          <p>
            Lost track of time and assignments? Can't keep track of due dates?
          </p>
          <p>
            Join us today! Hackaton will help you manage your time, projects and
            goals!
          </p>
        </section>
        <section className="auth">
          <form className="form">
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <button className="btn btn-primary">Sign in</button>
          </form>
          <section className="separator">
            <hr className="divider"></hr>
            <p>or</p>
            <hr className="divider"></hr>
          </section>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="First Name"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
            />
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              placeholder="Confirm Password"
              name="confirm_password"
              value={userData.confirm_password}
              onChange={handleChange}
            />
            <button className="btn btn-primary">Sign up</button>
          </form>
        </section>
      </div>
    </>
  );
}
