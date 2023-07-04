import { useState } from "react";
import { APP_LOGO } from "../../utils/constant";
import { Link } from "react-router-dom";
export const Header = () => {
  const [buttonLabel, setButtonLabel] = useState("Login");
  const handleLoginClickAction = () => {
    setButtonLabel(buttonLabel === "Login" ? "Logout" : "Login");
  };
  return (
    <div className="header">
      <img className="logo" alt={"app-logo"} src={APP_LOGO} />
      <ul className="nav-items">
        <li>
          <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
            Home
          </Link>
        </li>
        <li>Offer</li>
        <li>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <button
          className="login-btn"
          style={{
            height: "50px",
            width: "100px",
            border: "1px solid black",
            borderRadius: 20,
          }}
          onClick={() => {
            handleLoginClickAction();
          }}
        >
          {buttonLabel}
        </button>
      </ul>
    </div>
  );
};
