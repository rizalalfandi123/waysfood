import Header from "./components/header";
import PopularRestaurant from "./components/popular-rest";
import { NearRestaurant } from "./components/near-rest";
import { GuestNavBar } from "../../components/navbar";

function GuestHomepage() {
  const elements = (
    <>
      <GuestNavBar />
      <Header />
      <PopularRestaurant />
      <NearRestaurant />
    </>
  );
  return elements;
}

function UserHomepage() {
  const elements = (
    <>
      <Header />
      <PopularRestaurant />
      <NearRestaurant />
    </>
  );
  return elements;
}

export { GuestHomepage, UserHomepage };
