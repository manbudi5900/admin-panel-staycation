import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./assets/scss/style.scss";

import Login from "./pages/Login/Login";
import { User } from "./pages/User/User";
import { Wisata } from "./pages/Wisata/Wisata";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/wisata" element={<Wisata />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
