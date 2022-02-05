import axios from 'axios';

const handleSubmit = function(event, userData, setUser, navigate) {
  event.preventDefault();

  axios.post("/api/user/", userData).then((data) => {
    setUser({ ...data.data });
    navigate("/");
  });
};
const handleLoginSubmit = function(event, userLoginData, setUser, navigate) {
  event.preventDefault();

  axios
    .post("/api/user/login", userLoginData)
    .then((data) => {
      setUser({ ...data.data });
      navigate("/");
    })
    .catch((err) => {
      console.error(err);
    });
};

const handleChange = (event, userData, setUserData) => {
  const { name, value } = event.target;
  setUserData({ ...userData, [name]: value });
};
const handleLoginChange = (event, userLoginData, setUserLoginData) => {
  const { name, value } = event.target;
  setUserLoginData({ ...userLoginData, [name]: value });
};

export { handleSubmit, handleLoginSubmit, handleChange, handleLoginChange };