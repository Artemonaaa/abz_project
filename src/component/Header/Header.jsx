import Button from "../Button/Button";
import Logo from "../../theme/Image/Logo.png";

import "./Header.scss";

const Header = () => (
  <nav className="header container">
    <div className="header-logo">
      <img style={{cursor: 'pointer'}} src={Logo} alt="Logo" />
    </div>
    <div>
      <Button className="header-indent" title="Users" />
      <Button title="Sign up" />
    </div>
  </nav>
)

export default Header;