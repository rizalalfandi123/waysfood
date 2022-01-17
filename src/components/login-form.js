import { Form } from "react-bootstrap";
import Style from "./modal.module.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const element = (
    <>
      <Form>
        <h1 className={Style.title}>Login</h1>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            className={Style.input}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className={Style.input}
          />
        </Form.Group>
        <Link to="user">
        <button type="submit" className={Style.submit}>
          Submit
        </button>
        </Link>
      </Form>
      <div className={Style.registerLink}>
        Don't an have account ? <span>REGISTER NOW</span>
      </div>
    </>
  );
  return element;
}

export default LoginForm;
