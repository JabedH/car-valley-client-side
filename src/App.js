import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Home/Header/Header/Header";
import Home from "./Components/Home/Home/Home";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import Blog from "./Components/Blog/Blog";
import ManageCars from "./Components/ManageCars/ManageCars";
import MyCars from "./Components/MyCars/MyCars";
import AddCar from "./Components/AddCar/AddCar";
import Login from "./Components/Login/Login";
import Update from "./Components/Update/Update";
import Inventory from "./Components/inventory/inventory";
import AddNewItem from "./Components/AddNewItem/AddNewItem";
import NotFound from "./Components/NotFound/NotFound";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./Components/Signup/Signup";
import ProtectedItem from "./Components/ProtectedItem/ProtectedItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ManageCars" element={<ManageCars />} />
        <Route path="/MyCars" element={<MyCars />} />
        <Route path="/AddCar" element={<AddCar />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/update/:updateId"
          element={
            <ProtectedItem>
              {" "}
              <Update />{" "}
            </ProtectedItem>
          }
        />
        <Route
          path="/inventory"
          element={
            <ProtectedItem>
              <Inventory />
            </ProtectedItem>
          }
        ></Route>

        <Route
          path="/addnewitem"
          element={
            <ProtectedItem>
              <AddNewItem />
            </ProtectedItem>
          }
        ></Route>
        <Route path="/Singup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
