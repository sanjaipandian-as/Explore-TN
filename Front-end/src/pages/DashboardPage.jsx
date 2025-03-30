import React from "react";
import DestinationCard from "../components/DestinationCard"; // Corrected the import
import PopularSection from "../components/PopularSection";
import CalendarComponent from "../components/Calendar";

const Dashboard = () => {
  return (
    <div className="flex">
      
      <div className="w-[77%] ">
        <DestinationCard />
        <PopularSection />
      </div>

      
      <div className="w-[23%] flex flex-col gap-6 sticky top-24">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Dashboard;
