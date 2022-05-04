import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import Details from "../pages/Details";
import UpdateBlog from "../pages/UpdateBlog";
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/register" element={<Register/>} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/profile" element={<Profile/>} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/new-blog" element={<NewBlog/>} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/details" element={<Details/>} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/update" element={<UpdateBlog/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;