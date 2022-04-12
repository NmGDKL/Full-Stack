import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Details from '../pages/details/Details'
import NotFound from "../pages/notfound/NotFound";
const AppRouter = () => {
    const location = useLocation();
  return (
    <div>
      {location.pathname === '/login' || location.pathname === '/' ? null: <Navbar/>}
        <div>
          <Routes>
          <Route path="/" exact element={<Login />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:recipeLabel" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </div>
  );
};

export default AppRouter