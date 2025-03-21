import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/DashboardPage';


function App() {
  return (
    <div className="flex bg-[#0c1220] h-screen text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-scroll">
        <Topbar />
        <Dashboard />
      </div>
      
    </div>
  );
}

export default App;
