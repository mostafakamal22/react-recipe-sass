import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p className="errorMessage">
        Page not found. Please go back to the home page.
      </p>
      <Link to="/" className="homeButton">
        <HiHome /> Go Home
      </Link>
    </div>
  );
}
