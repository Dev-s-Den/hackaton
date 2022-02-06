// Style
import "./styles/Category.scss";

export default function Category(props) {
  const { name, color } = props;
  return (
    <li
      className="category"
      style={{ color: `${color}`, border: `1px solid ${color}` }}
    >
      <p>{name}</p>
    </li>
  );
}
