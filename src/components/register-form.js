import { Form } from "react-bootstrap";
import Style from "./modal.module.css";


function RegisterForm() {

  const element = (
    <Form>
      <h1 className={Style.title}>Register</h1>
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Fullname"
          className={Style.input}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Address"
          className={Style.input}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control
          type="number"
          placeholder="Phone"
          className={Style.input}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control
          type="email"
          placeholder="Email"
          className={Style.input}
        />
      </Form.Group>
      <Form.Select className={`mb-4 ${Style.select}`}>
        <option disabled selected>
          As User
        </option>
        <option value="1">User</option>
        <option value="2">Partner</option>
      </Form.Select>
      <Form.Group className="mb-4">
        <Form.Control
          type="password"
          placeholder="Password"
          className={Style.input}
        />
      </Form.Group>
      <button type="submit" className={Style.submit}>
        Submit
      </button>
      <div className={Style.registerLink}>
        Already have an account ? <span>REGISTER NOW</span>
      </div>
    </Form>
  );
  return element;
}

export default RegisterForm;
