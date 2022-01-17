import { Form } from "react-bootstrap";
import Style from "../../../components/modal.module.css";
import Style2 from "./edit-profile.module.css";

function EditProfile() {
  const element = (
    <section>
      <div className={Style2.title}>Edit Profile</div>
      <Form>
        <div className={Style2.fullName}>
          <div className={Style2.inputName}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                placeholder="Fullname"
                className={Style.input}
              />
            </Form.Group>
          </div>

          <button type="button" className={Style2.button}>
            Attach Image <i className="uil uil-upload-alt"></i>
          </button>
        </div>

        <Form.Group className="mb-4">
          <Form.Control
            type="email"
            placeholder="Email"
            className={Style.input}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            placeholder="Phone"
            className={Style.input}
          />
        </Form.Group>
        <div className={Style2.location}>
          <div className={Style2.inputLoc}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                placeholder="Location"
                className={`${Style.input}`}
              />
            </Form.Group>
          </div>

          <button type="button" className={Style2.button}>
            Select On Map <i className="uil uil-map"></i>
          </button>
        </div>

        <div className={Style2.rightButton}>
          <div></div>
          <button type="submit" className={Style2.saveButton}>
            Save
          </button>
        </div>
      </Form>
    </section>
  );
  return element;
}

export default EditProfile;
