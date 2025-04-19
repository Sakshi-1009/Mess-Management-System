import React from 'react'
import { useAppContext } from '../context/AppContext';

export default function Attendance() {
  const { attendance, markAttendance } = useAppContext();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mark Attendance</h2>
      <label>
        <input
          type="checkbox"
          checked={attendance.breakfast}
          onChange={(e) => markAttendance('breakfast', e.target.checked)}
        />
        Breakfast
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={attendance.lunch}
          onChange={(e) => markAttendance('lunch', e.target.checked)}
        />
        Lunch
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={attendance.dinner}
          onChange={(e) => markAttendance('dinner', e.target.checked)}
        />
        Dinner
      </label>
    </div>
  );
}
