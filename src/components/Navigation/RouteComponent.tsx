import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Search from "../../pages/Search";
import DrawerLayout from "../Layouts/DrawerLayout"
import NotFound from "../NotFound/FindSection";
function RouteComponent() {
  return (
    <div>
      <Routes>
      <Route element={<DrawerLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouteComponent;
