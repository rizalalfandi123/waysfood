import Style from "./header.module.css";

function Header() {
  const element = (
    <section className={Style.header}>
      <div className={Style.greeting}>
        <h1>Are You Hungry ?</h1>
        <h1>Express Home Delivery</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          earum reiciendis quas beatae sunt magnam ratione cumque minus
          accusantium non ab provident neque, vero possimus odio assumenda
          repudiandae totam. Nihil.
        </p>
      </div>
      <div className={Style.imgBox}>
        <img src="/images/pizza.svg" alt="pizza" />
      </div>
    </section>
  );
  return element;
}

export default Header;
