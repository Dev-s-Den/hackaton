// Style
import "./styles/Home.scss";

// Components
import Auth from "./Authorization";
import FilterBar from "./FilterBar";
import Goal from "./Goal";

export default function Home(props) {
  const { user, setUser } = props;

  return (
    <section className="home">
      {!user && <Auth setUser={setUser} />}
      {user && (
        <>
          <FilterBar />
          <Goal />
        </>
      )}
    </section>
  );
}
