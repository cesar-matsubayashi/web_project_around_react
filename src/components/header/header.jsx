import logo from "../../images/logo.svg";

function Header() {
  return (
    <header class="header">
      <img src={logo} alt="Logo Around The US." class="header__logo" />
    </header>
  );
}

export default Header;
