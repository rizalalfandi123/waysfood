import Style from "../../homepage/components/near-rest.module.css";
import { Link } from "react-router-dom";

function RestCard(props) {
  const element = (
    <Link to={`${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
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

function AllRestaurant() {
  const element = (
      <section>
        <div className="top-section">
          <div className="section-title">All Restaurans</div>
          <div>
            <span className="filter">closest | popular | rating</span>
          </div>
        </div>
        <div className="list">
          <RestCard
            imgLink="/images/w644.png"
            name="Ayam Geprek Bensu"
            location="200m"
            alt="Bensu"
            id="1"
          />
          <RestCard
            imgLink="/images/ayam.png"
            name="Pecel Ayam Prambanan"
            location="400m"
            alt="Prambanan"
            id="1"
          />
          <RestCard
            imgLink="/images/burger-king.svg"
            name="Burger King"
            location="8km"
            alt="Burger King"
            id="1"
          />
          <RestCard
            imgLink="/images/nasgor.png"
            name="Nasi Goreng Pak Slamet"
            location="700m"
            alt="Nasgor"
            id="1"
          />
          <RestCard
            imgLink="/images/kfc.svg"
            name="KFC"
            location="5km"
            alt="KFC"
            id="1"
          />
          <RestCard
            imgLink="/images/mcdonalds.svg"
            name="MCDonalds"
            location="6km"
            alt="MCD"
            id="1"
          />
          <RestCard
            imgLink="/images/kopi.png"
            name="Kopi Kenangan"
            location="1km"
            alt="Kopi"
            id="1"
          />
          <RestCard
            imgLink="/images/starbucks.svg"
            name="Startbucks"
            location="10km"
            alt="starbuks"
            id="1"
          />
        </div>
      </section>
  );
  return element;
}

export default AllRestaurant;
