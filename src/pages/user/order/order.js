import Style from "./order.module.css";
import Style2 from "../../../components/modal.module.css";
import { Form } from "react-bootstrap";
import { MapModal } from "../../../components/modal";
import { useState } from "react";

function ProducCard() {
  const element = (
    <div className={Style.productCard}>
      <div className={Style.image}>
        <img src="/images/ayam.png" alt="img" />
      </div>
      <div className={Style.desc}>
        <div className={Style.topCard}>
          <div className={Style.productName}>Ayam Geprek</div>
          <div className={Style.price}>Rp. 55.000,-</div>
        </div>
        <div className={Style.bodyCard}>
          <div className={Style.count}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <i className="uil uil-trash-alt"></i>
        </div>
      </div>
    </div>
  );
  return element;
}

function Order() {
  const [mapModal, setMapModal] = useState(false);
  const closeMapModal = () => setMapModal(false);
  const showMapModal = () => setMapModal(true);

  const element = (
    <section>
      <h2>Geprek Bensu</h2>
      <div className={Style.deliveryLoc}>
        <div className={Style.title}>Delivery Location</div>
        <div className={Style.location}>
          <div className={Style.inputLoc}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                placeholder="Location"
                className={`${Style2.input}`}
              />
            </Form.Group>
          </div>
          <button type="button" className={Style.button} onClick={showMapModal}>
            Select On Map <i className="uil uil-map"></i>
          </button>
        </div>
      </div>
      <div className={Style.title}>Review Your Order</div>
      <div className={Style.reviewOrder}>
        <div className={Style.products}>
          <ProducCard />
          <ProducCard />
          <ProducCard />
          <ProducCard />
          <div className={Style.addBorder}>
            <span></span>
          </div>
        </div>
        <div className={Style.totalCard}>
          <div className={Style.subTotal}>
            <div className={Style.row}>
              <span>Subtotal</span>
              <span>Rp. 55.000,-</span>
            </div>
            <div className={Style.row}>
              <span>Qty</span>
              <span>2</span>
            </div>
            <div className={Style.row}>
              <span>Ongkir</span>
              <span>Rp. 10.000,-</span>
            </div>
          </div>
          <div className={Style.total}>
            <div className={Style.row}>
              <span>Total</span>
              <span>Rp. 120.000,-</span>
            </div>
            <button>Order</button>
          </div>
        </div>
      </div>
      <MapModal show={mapModal} handleClose={closeMapModal} />
    </section>
  );
  return element;
}
export default Order;
