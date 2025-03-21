import React from 'react';
import DestinationCard from "../components/PopularSection";
import PopularSection from '../components/PopularSection';
import CalendarComponent from '../components/Calendar'; // <== corrected import path

const Dashboard = () => {
  return (
    <div >
      {/* Updated Left Section */}
      <div>
        <div >
          
          <PopularSection />
        </div>
      </div>


      {/* Right Sidebar */}
      <div className="w-[23%] flex flex-col gap-6 sticky top-24">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Dashboard;
