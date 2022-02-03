// Style
import "./styles/Authorization.scss";

export default function Auth(props) {
  return (
    <>
      <div className="home">
        <section className="text">
          <text>
            Lost track of time and assignments? Can't keep track of due dates?
          </text>
          <text>
            Join us today! Hackaton will help you manage your time, projects and
            goals!
          </text>
        </section>
        <section className="auth">
          <form className="form-signin">
            <button className="btn btn-primary">Sign in</button>
          </form>
          <section className="separator">
            <hr className="divider"></hr>
            <text>or</text>
            <hr className="divider"></hr>
          </section>
          <form className="form-signup">
            <button className="btn btn-primary">Sign up</button>
          </form>
        </section>
      </div>
    </>
  );
}
