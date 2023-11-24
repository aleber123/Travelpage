import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css'; // Import your custom CSS file
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS



const Calendar = () => {
  /* Komponenten Calendar används för att visa en datumväljare */
  <div className="custom-button">
<button className="m-3" onClick={DatePicker}>
  <i className="fas fa-calendar-alt "></i> Incheckning - utcheckning{' '}
  <i className="fas fa-caret-down"></i>
</button>;
</div>
  const [startDate, setStartDate] = useState(new Date());
   /* Skapa en lokal statevariabel (startDate) för att hålla reda på det valda datumet */
  return (
    <DatePicker
      className="datePicker"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      /* Uppdaterar startDate när användaren väljer ett datum */
    />
  
  );

};

export default Calendar;
