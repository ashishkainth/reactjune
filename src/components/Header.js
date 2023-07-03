import { useState } from "react";
import { APP_LOGO } from "../utils/constant";
export const Header = () => {
  const [buttonLabel, setButtonLabel] = useState("Login");
  const handleLoginClickAction = () => {
    setButtonLabel(buttonLabel === "Login" ? "Logout" : "Login");
  };
  return (
    <div className="header">
      <img className="logo" alt={"app-logo"} src={APP_LOGO} />
      <ul className="nav-items">
        <li>Home</li>
        <li>Offer</li>
        <li>About</li>
        <li>Contact</li>
        <button
          className="login-btn"
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
