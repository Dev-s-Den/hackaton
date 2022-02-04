// Style
import "./styles/Category.scss";

export default function Category(props) {
  return (
    <li className="category">
      <p>{props.name}</p>
    </li>
  );
}
