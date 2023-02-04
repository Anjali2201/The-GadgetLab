import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Feed from "./Pages/Feed";
import Reviews from "./Pages/Reviews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/newreview" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
