import logo from "@/assets/images/logo.webp";
import { SiGreasyfork } from "react-icons/si";

import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <aside id="default-sidebar" className="sidebar" aria-label="Sidebar">
      <div className="sidebar-content">
        <div>
          <img src={logo} className="sidebar-logo" alt="logo" />
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-item sidebar-item-primary">
            <a href="#/" className="sidebar-link">
              <SiGreasyfork className="sidebar-icon" />
              <span className="sidebar-text">Meals</span>
            </a>
          </li>
          <li className="sidebar-item sidebar-item-border">
            <a href="#/" className="sidebar-link">
              <SiGreasyfork className="sidebar-icon" />
              <span className="sidebar-text">Ingredients</span>
            </a>
          </li>
          <li className="sidebar-item sidebar-item-border">
            <a href="#/" className="sidebar-link">
              <SiGreasyfork className="sidebar-icon" />
              <span className="sidebar-text">Area</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
