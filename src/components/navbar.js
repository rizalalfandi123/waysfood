import { Navbar } from "react-bootstrap";
import { useState } from "react";
import Style from "./navbar.module.css";
import { LoginModal, RegisterModal } from "./modal";
import { Link } from "react-router-dom";

function NavbarButton(props) {
  const { label, icon } = props;
  const component = (
    <div className={Style.navbarButton}>
      <div className={Style.icon}>{icon}</div>
      <div className={Style.label}>{label}</div>
    </div>
  );
  return component;
}

function User() {
  const element = (
    <div className={Style.afterLogin}>
      <Link to="order">
        <button className={Style.cartIcon}>
          <div className={Style.number}>6</div>
          <i className="uil uil-shopping-cart"></i>
        </button>
      </Link>

      <div className={Style.dropdown}>
        <img src="/images/user.png" alt="user" />
        <div className={Style.dropdownContent}>
          <Link to="/user/profile">
            <NavbarButton label="Login" icon={<i class="uil uil-user"></i>} />
          </Link>
          <button className={Style.logout}>Logout</button>
        </div>
      </div>
    </div>
  );
  return element;
}

function Partner() {
  const element = (
    <div className={Style.afterLogin}>
      <div className={Style.dropdown}>
        <img src="/images/partnerProfile.png" alt="user" />
        <div className={Style.dropdownContent}>
          <Link to="/partner/profile">
            <button className={Style.profile}>Profile Partner</button>
          </Link>
          <Link to="/partner/add-product">
            <button className={Style.logout}>Add Product</button>
          </Link>
          <button className={Style.logout}>Logout</button>
        </div>
      </div>
    </div>
  );
  return element;
}

function Guest() {
  const [loginModal, setLoginModal] = useState(false);
  const closeLoginModal = () => setLoginModal(false);
  const showLoginModal = () => setLoginModal(true);

  const [registerModal, setRegisterModal] = useState(false);
  const closeRegisterModal = () => setRegisterModal(false);
  const showRegisterModal = () => setRegisterModal(true);

  const element = (
    <>
      <div className={Style.buttons}>
        <button className={Style.navButton} onClick={showLoginModal}>
          Login
        </button>
        <button className={Style.navButton} onClick={showRegisterModal}>
          Register
        </button>
      </div>

      <LoginModal show={loginModal} handleClose={closeLoginModal} />
      <RegisterModal show={registerModal} handleClose={closeRegisterModal} />
    </>
  );
  return element;
}

function UserNavBar() {
  const element = (
    <Navbar className={Style.navbar}>
      <Link to="/user" className={Style.linkToHome}>
        <Navbar.Brand href="#">
          <div className={Style.logo}>
            <span>Waysfood</span>
            <img src="/images/Icon.svg" alt="icon" />
          </div>
        </Navbar.Brand>
      </Link>
      <User />
    </Navbar>
  );
  return element;
}

function GuestNavBar() {
  const element = (
    <Navbar className={Style.navbar}>
      <Link to="/" className={Style.linkToHome}>
        <Navbar.Brand href="#">
          <div className={Style.logo}>
            <span>Waysfood</span>
            <img src="/images/Icon.svg" alt="icon" />
          </div>
        </Navbar.Brand>
      </Link>
      <Guest />
    </Navbar>
  );
  return element;
}

function PartnerNavBar() {
  const element = (
    <Navbar className={Style.navbar}>
      <Link to="/partner" className={Style.linkToHome}>
        <Navbar.Brand href="#">
          <div className={Style.logo}>
            <span>Waysfood</span>
            <img src="/images/Icon.svg" alt="icon" />
          </div>
        </Navbar.Brand>
      </Link>
      <Partner />
    </Navbar>
  );
  return element;
}

export { GuestNavBar, PartnerNavBar, UserNavBar };
