// Libraries
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

// Helpers
import {
  handleSubmit,
  handleLoginSubmit,
  handleChange,
  handleLoginChange,
} from "./helpers/registerationHelpers";

// Style
import "./styles/Authorization.scss";

export default function Auth(props) {
  const navigate = useNavigate();
  const { setUser, user } = props;

  useEffect(() => {
    axios.get('/api/user/login')
      .then(data => {
        setUser(data.data)
        navigate('/')
      })
      .catch(err => {
        console.error(err)

        return navigate('/login')
      })
  }, [])

  // States
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

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
          <form
            className="form"
            onSubmit={(e) => {
              handleLoginSubmit(e, userLoginData, setUser, navigate);
            }}
          >
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              value={userLoginData.email}
              onChange={(e) => {
                handleLoginChange(e, userLoginData, setUserLoginData);
              }}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={userLoginData.password}
              onChange={(e) => {
                handleLoginChange(e, userLoginData, setUserLoginData);
              }}
            />
            <button className="btn btn-primary">Sign in</button>
          </form>
          <section className="separator">
            <hr className="divider"></hr>
            <p>or</p>
            <hr className="divider"></hr>
          </section>
          <form
            className="form"
            onSubmit={(e) => {
              handleSubmit(e, userData, setUser, navigate);
            }}
          >
            <input
              className="input"
              type="text"
              placeholder="First Name"
              name="first_name"
              value={userData.first_name}
              onChange={(e) => {
                handleChange(e, userData, setUserData);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={userData.last_name}
              onChange={(e) => {
                handleChange(e, userData, setUserData);
              }}
            />
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={(e) => {
                handleChange(e, userData, setUserData);
              }}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={(e) => {
                handleChange(e, userData, setUserData);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="Confirm Password"
              name="confirm_password"
              value={userData.confirm_password}
              onChange={(e) => {
                handleChange(e, userData, setUserData);
              }}
            />
            <button className="btn btn-primary">Sign up</button>
          </form>
        </section>
      </div>
    </>
  );
}
