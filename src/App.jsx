import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Feed from "./Pages/Feed";
import Reviews from "./Pages/Reviews";
import SingleReview from "./Pages/SingleReview";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/newreview" element={<Reviews />} />
        <Route path="/review/:id" element={<SingleReview />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
