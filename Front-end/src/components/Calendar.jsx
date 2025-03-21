import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarStyles.css';
import { FaUserCircle } from 'react-icons/fa'; 

const CalendarCard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <div className="profile-section">
        <FaUserCircle size={32} color="#b0b0b0" className="profile-icon" /> 
        <span className="profile-name">Anni</span>
      </div>
      
      <div className="calendar-wrapper">
        <Calendar
          onChange={setDate}
          value={date}
          next2Label={null}
          prev2Label={null}
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase().slice(0, 3)
          }
          showNeighboringMonth={false}
          tileClassName={({ date, view }) => {
            if (view === 'month' && (date.getDay() === 0 || date.getDay() === 6)) {
              return 'weekend-day';
            }
            return null;
          }}
        />
      </div>
      <div className="booking-section">
        <h5>Bookings</h5>
        <p>Upcoming bookings or actions can go here.</p>
      </div>
    </div>
  );
};

export default CalendarCard;
