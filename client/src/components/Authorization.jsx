// Style
import "./styles/Authorization.scss";

export default function Auth(props) {
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
          <form className="form">
            <input className="input" type="text" placeholder="First Name" />
            <input className="input" type="text" placeholder="Last Name" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <input
              className="input"
              type="text"
              placeholder="Confirm Password"
            />
            <button className="btn btn-primary">Sign up</button>
          </form>
        </section>
      </div>
    </>
  );
}
