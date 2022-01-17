import Style from "./near-rest.module.css";
import { Link } from "react-router-dom";

function RestCard(props) {
  const element = (
    <Link to={`restaurant/${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <div className={Style.restaurantCard}>
        <div className={Style.imgBox}>
          <img src={props.imgLink} alt={props.alt} />
        </div>
        <div className={Style.restaurantDesc}>
          <span>{props.name}</span>
          <div className={Style.location}>
            <i className="uil uil-map-marker"></i>
            {props.location} from here
          </div>
        </div>
      </div>
    </Link>
  );
  return element;
}

function NearRestaurant() {
  const element = (
    <section>
      <div className="top-section">
        <div className="section-title">Restaurant Near You</div>
        <Link to="restaurant">
          <button className="button-title">See All Restaurant</button>
        </Link>
      </div>
      <div className="list">
        <RestCard
          imgLink="/images/w644.png"
          name="Ayam Geprek Bensu"
          location="200m"
          alt="Bensu"
          id="2"
        />
        <RestCard
          imgLink="/images/ayam.png"
          name="Pecel Ayam Prambanan"
          location="400m"
          alt="Prambanan"
          id="2"
        />
        <RestCard
          imgLink="/images/nasgor.png"
          name="Nasi Goreng Pak Slamet"
          location="700m"
          alt="Nasgor"
          id="2"
        />
        <RestCard
          imgLink="/images/kopi.png"
          name="Kopi Kenangan"
          location="1km"
          alt="Kopi"
          id="2"
        />
      </div>
    </section>
  );
  return element;
}

export { RestCard, NearRestaurant };
