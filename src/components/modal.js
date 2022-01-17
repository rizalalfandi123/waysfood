import { Modal } from "react-bootstrap";
import Style from "./modal.module.css";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import Map from "../pages/user/order/map";

function LoginModal(props) {
  const element = (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header className={Style.topModal} closeButton></Modal.Header>
      <Modal.Body><LoginForm/></Modal.Body>
    </Modal>
  );
  return element;
}

function RegisterModal(props) {
  const element = (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header className={Style.topModal} closeButton></Modal.Header>
      <Modal.Body><RegisterForm/></Modal.Body>
    </Modal>
  );
  return element;
}

function MapModal(props) {
  const element = (
    <Modal show={props.show} onHide={props.handleClose} dialogClassName={Style.mapModal} centered >
      <Modal.Header className={Style.topModal} closeButton>
        <h2>Select Location</h2>
      </Modal.Header>
      <Modal.Body className={Style.bodyMapModal}><Map/></Modal.Body>
    </Modal>
  );
  return element;
}

export { LoginModal , RegisterModal, MapModal};
