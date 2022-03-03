import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flight from "./views/flight";
import Hotel from "./views/hotel";
import Food from "./views/food";
import Ride from "./views/ride";
import App from "./App";
import Nav from "./components/menu/menu";

export default (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/flight" element={<Flight />} />
      <Route exact path="/hotel" element={<Hotel />} />
      <Route exact path="/food" element={<Food />} />
      <Route exact path="/ride" element={<Ride />} />
    </Routes>
  </BrowserRouter>
);
