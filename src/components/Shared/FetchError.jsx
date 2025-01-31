import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function FetchError() {
  return (
    <div>
      <p className="errorMessage">
        oops! something went wrong. Please try again or go home page.
      </p>
      <Link to="/" className="homeButton">
        <HiHome /> Go Home
      </Link>
    </div>
  );
}
