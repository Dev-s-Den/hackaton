// Style
import "./styles/NavBar.scss";

export default function NavBar(props) {
  return (
    <>
      <div className="navbar">
        <img
          className="navbar-logo"
          src="https://i.imgur.com/5mNOpit.png"
          alt="logo"
        />
        <h2 className="navbar-title">Hackaton</h2>
      </div>
    </>
  );
}
