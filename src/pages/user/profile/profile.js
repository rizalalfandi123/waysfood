import Style from "./profile.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

function Profile() {
  const element = <Outlet />;
  return element;
}

function UserProfile() {
  const element = (
    <section className={Style.profile}>
      <div className={Style.detailProfile}>
        <h1 className={Style.title}>My Profile</h1>
        <div className={Style.desc}>
          <div className={Style.imgBox}>
            <img src="/images/profile.png" alt="use" />
            <Link to="edit">
              <button className={Style.editButton}>Edit Profile</button>
            </Link>
          </div>

          <div className={Style.about}>
            <div className={Style.fieldGroup}>
              <span className={Style.field}>Fullname</span>
              <span className={Style.value}>Andi</span>
            </div>
            <div className={Style.fieldGroup}>
              <span className={Style.field}>Email</span>
              <span className={Style.value}>Andigans@gmail.com</span>
            </div>
            <div className={Style.fieldGroup}>
              <span className={Style.field}>Phone</span>
              <span className={Style.value}>0858578473837</span>
            </div>
            <div className={Style.fieldGroup}>
              <span className={Style.field}>Address</span>
              <span className={Style.value}>Amerika</span>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.history}>
        <h1 className={Style.title}>History Transaction</h1>
        <div className={Style.transCard}>
          <div className={Style.topCard}>
            <div className={Style.desc}>
              <span className={Style.restoName}>Geprek Bensu</span>
              <span className={Style.date}>Saturday, 12 Maret 2021</span>
            </div>
            <div className={Style.logo}>
              <span>WaysFood</span>
              <img src="/images/icon.svg" alt="icon" />
            </div>
          </div>
          <div className={Style.bodyCard}>
            <span className={Style.price}>Total: Rp 55.000,-</span>
            <div className={Style.status}>Finished</div>
          </div>
        </div>
      </div>
    </section>
  );
  return element;
}
export { Profile, UserProfile };
