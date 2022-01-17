import Style from "./detail-rest.module.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const element = (
    <div className={Style.card}>
      <div className={Style.imgBox}>
        <img src={props.imgLink} alt={props.alt} />
      </div>
      <div className={Style.desc}>
        <span className={Style.title}>{props.name}</span>
        <span className={Style.price}>Rp. {props.price},-</span>

        <Link to="/user/order">
          <button className={Style.order}>order</button>
        </Link>
      </div>
    </div>
  );
  return element;
}

function DetailRestaurant() {
  const element = (
    <section>
      <div className="top-section">
        <div className="section-title">Geprek Bensu Menu</div>
        <div>
          <span className="filter">rating | best seller | price</span>
        </div>
      </div>
      <div className="list">
        <ProductCard
          imgLink="/images/w644 1-1.png"
          alt="image"
          name="Paket Geprek"
          price="50.000"
        />
        <ProductCard
          imgLink="/images/w644 1-2.png"
          alt="image"
          name="Mie Ayam Geprek"
          price="15.000"
        />
        <ProductCard
          imgLink="/images/w644 1-3.png"
          alt="image"
          name="Paket Geprek Keju"
          price="80.000"
        />
        <ProductCard
          imgLink="/images/w644 1-4.png"
          alt="image"
          name="Mie Ayam Geprek Keju"
          price="40.000"
        />
        <ProductCard
          imgLink="/images/w644 1-5.png"
          alt="image"
          name="Paket Geprek Leleh"
          price="50.000"
        />
        <ProductCard
          imgLink="/images/w644 1-6.png"
          alt="image"
          name="Mie Ayam Leleh"
          price="55.000"
        />
        <ProductCard
          imgLink="/images/w644 1-7.png"
          alt="image"
          name="Paket Sambal Matah"
          price="35.000"
        />
        <ProductCard
          imgLink="/images/w644 1.png"
          alt="image"
          name="Mie Ayam Sambal Telur Asin"
          price="65.000"
        />
        <ProductCard
          imgLink="/images/w644 1.png"
          alt="image"
          name="Mie Ayam Sambal Telur Asin"
          price="65.000"
        />
        <ProductCard
          imgLink="/images/w644 1.png"
          alt="image"
          name="Mie Ayam Sambal Telur Asin"
          price="65.000"
        />
      </div>
    </section>
  );
  return element;
}

export { DetailRestaurant };
