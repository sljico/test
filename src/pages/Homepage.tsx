import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam vel esse
      inventore ea, similique fugit voluptatibus? Facere porro dolore voluptas?
      <br />
      <br />
      <Link to="/signin">Go to signin</Link>
    </div>
  );
}
