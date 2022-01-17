import Style from "./popular-rest.module.css";
import { Link } from "react-router-dom";

function RestCard(props) {
  const element = (
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
  );
  return element;
}

console.log(<restCard />);

function PopularRestaurant() {
  const element = (
    <section>
      <div className="top-section">
        <div className="section-title">Popular Restaurant</div>
        <Link to="restaurant">
          <button className="button-title">See All Restaurant</button>
        </Link>
      </div>
      <div className="list">
        <RestCard
          imgLink="/images/burger-king.svg"
          name="Burger King"
          location="8km"
          alt="Burger King"
        />
        <RestCard
          imgLink="/images/kfc.svg"
          name="KFC"
          location="5km"
          alt="KFC"
        />
        <RestCard
          imgLink="/images/mcdonalds.svg"
          name="MCDonalds"
          location="6km"
          alt="MCD"
        />
        <RestCard
          imgLink="/images/starbucks.svg"
          name="Startbucks"
          location="10km"
          alt="starbuks"
        />
      </div>
    </section>
  );
  return element;
}

export default PopularRestaurant;
