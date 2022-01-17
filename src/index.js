import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { UserHomepage, GuestHomepage } from "./pages/homepage/homepage";
import Restaurant from "./pages/user/restaurant/restaurant";
import AllRestaurant from "./pages/user/restaurant/all-rest";
import { DetailRestaurant } from "./pages/user/restaurant/detail-rest";
import { Profile, UserProfile } from "./pages/user/profile/profile";
import Order from "./pages/user/order/order";
import EditProfile from "./pages/user/profile/edit-profile";
import {
  PartnerProfile,
  PartnerProfileDesc,
} from "./pages/partner/profile/profile";
import EditPartner from "./pages/partner/profile/edit-partner";
import Income from "./pages/partner/income/income";
import User from "./pages/user/user";
import Partner from "./pages/partner/partner";
import AddProduct from "./pages/partner/add-product/add-product";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<GuestHomepage />} />
          <Route path="user" element={<User />}>
            <Route index element={<UserHomepage />} />
            <Route path="restaurant" element={<Restaurant />}>
              <Route index element={<AllRestaurant />} />
              <Route path=":idRestaurant" element={<DetailRestaurant />} />
            </Route>
            <Route path="profile" element={<Profile />}>
              <Route index element={<UserProfile />} />
              <Route path="edit" element={<EditProfile />} />
            </Route>
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="partner" element={<Partner />}>
            <Route index element={<Income />} />
            <Route path="profile" element={<PartnerProfile />}>
              <Route index element={<PartnerProfileDesc />} />
              <Route path="edit" element={<EditPartner />} />
            </Route>
            <Route path="add-product" element={<AddProduct />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
