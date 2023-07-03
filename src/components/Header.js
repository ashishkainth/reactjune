import { APP_LOGO } from "../utils/constant";
export const Header = () => {
  return (
    <div className="header">
      <img className="logo" alt={"app-logo"} src={APP_LOGO} />
      <ul className="nav-items">
        <li>Home</li>
        <li>Offer</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
