import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Cookie from "./components/Cookie/Cookie";
import { Footer, Header } from "./components/Layout";
import {
  About,
  Account,
  Cart,
  Checkout,
  Contact,
  CustomerService,
  FAQ,
  Home,
  Locate,
  NotFound,
  Product,
  Products,
  Register,
  Privacy,
} from "./pages";
import {
  Info,
  Orders,
  Adress,
  Favorites,
  Discount,
  Giftcard,
  NotFound as AccountRouteNotFound,
} from "./pages/Account/Routes";

import "react-multi-carousel/lib/styles.css";


function App() {
  const [open, setOpen] = useState(true);
  
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />}>
          <Route path="info" element={<Info />} />
          <Route path="orders" element={<Orders />} />
          <Route path="adress" element={<Adress />}></Route>
          <Route path="favorites" element={<Favorites />} />
          <Route path="discount" element={<Discount />} />
          <Route path="giftcard" element={<Giftcard />} />
          <Route path="*" element={<AccountRouteNotFound />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/locate" element={<Locate />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:headerslugurl" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<Privacy></Privacy>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Cookie open={open} setOpen={setOpen} />

      <Footer />
    </>
  );
}

export default App;
