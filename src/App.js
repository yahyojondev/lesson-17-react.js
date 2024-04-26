import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, NavLink } from "react-router-dom";
import { Routers } from "./static/Router";
import Footer from "./components/footer/footer";
import SingleRoute from "./components/singleRoute/SingleRoute";
import CheckOut from "./pages/checkOut/CheckOut";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {Routers?.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
        <Route path={"/singleRoute/:id"} element={<SingleRoute />} />
        <Route path={"/checkOut"} element={<CheckOut />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
