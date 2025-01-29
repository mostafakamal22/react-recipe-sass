import logo from "@/assets/images/logo.webp";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-header">
          <a href="#" className="footer-logo">
            <img src={logo} alt="Recipe Logo" className="footer-logo-image" />
            <span className="footer-logo-text">Recipe</span>
          </a>
          <span className="footer-brand">Route</span>
        </div>
        <hr className="footer-divider" />
        <span className="footer-rights">
          © 2025{" "}
          <a href="#0" className="footer-rights-link">
            Mostafa Kamal™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
