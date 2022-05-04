import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Home/Header/Header/Header";
import Home from "./Components/Home/Home/Home";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import Blog from "./Components/Blog/Blog";
import ManageItems from "./Components/Manage Items/ManageItems";
import AddItem from "./Components/AddItem/AddItem";

import MyItems from "./Components/MyItems/MyItems";
import NotFound from "./Components/NotFound/NotFound";
import "react-toastify/dist/ReactToastify.css";
import ProtectedItem from "./Components/ProtectedItem/ProtectedItem";
import Signup from "./Components/Home/Signup/Signup";
import Login from "./Components/Home/Login/Login";
import ManageInventories from "./Components/ManageInventories/ManageInventories";
import Inventory from "./Components/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ManageItems" element={<ManageItems />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Inventory/:updateId"
          element={
            <ProtectedItem>
              {" "}
              <Inventory />{" "}
            </ProtectedItem>
          }
        />
        <Route
          path="/manageinventories"
          element={
            <ProtectedItem>
              <ManageInventories />
            </ProtectedItem>
          }
        ></Route>

        <Route
          path="/MyItems"
          element={
            <ProtectedItem>
              <MyItems />
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
