import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/DashboardPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Booking from "./pages/Booking"; // Ensure this file exists!
import Favorite from "./pages/Favorite";
import ExploreAI from "./pages/ExploreAI";
import ChatApp from "./pages/ExploreAI";
import Chennai from "./PlacePage/Chennai";
import Madurai from "./PlacePage/Madurai";
import Ooty from "./PlacePage/Ooty";

function App() {
  return (
    <Router>
      <div className="flex bg-[#0c1220] h-screen text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-y-scroll">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/booking" element={<Booking />} /> 
            <Route path="/Favourite" element={<Favorite/>}/>
            <Route path="/Explore-ai" element={<ChatApp/>}/>
            <Route path="/Chennai" element={<Chennai/>}/>
            <Route path="/Madurai" element={<Madurai/>}/>
            <Route path="/Ooty" element={<Ooty/>}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
