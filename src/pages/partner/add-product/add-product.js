import Style from "../../../components/modal.module.css";
import Style2 from "../../user/profile/edit-profile.module.css";
import { Form } from "react-bootstrap";


function AddProduct() {
  const element = (
    <section>
      <h1 className={Style2.title}>Add Product</h1>
      <Form>
        <div className={Style2.fullName}>
          <div className={Style2.inputName}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                placeholder="Title"
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
            type="number"
            placeholder="Price"
            className={Style.input}
          />
        </Form.Group>
        

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
export default AddProduct;
