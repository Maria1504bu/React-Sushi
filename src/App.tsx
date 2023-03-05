import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ItemPage from "./pages/FullItem";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

import "./scss/app.scss";
import MapOfUkraine from "./pages/MapOfUkraine";

function App() {
  const ghRepo = "/React-Sushi"

  return (
    <div className="wrapper">
      <Header ghRepo="/React-Sushi" />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path= {`${ghRepo}/`} element={<Home />} />
            <Route path={`${ghRepo}/Map`} element={<MapOfUkraine />} />
            <Route path= {`${ghRepo}/:id`} element={<ItemPage />} />
            <Route path={`${ghRepo}/Cart`} element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
