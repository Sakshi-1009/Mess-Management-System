import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Attendance() {
  const { attendance, markAttendance, resetAttendance } = useAppContext();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedMeals = Object.values(attendance).filter((v) => v);
    if (selectedMeals.length === 0) {
      setError('Please select at least one meal.');
      setSubmitted(false);
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mark Attendance</h2>

      <form onSubmit={handleSubmit}>
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
        <br /><br />

        <button type="submit">Submit</button>
        <button type="button" style={{ marginLeft: '1rem' }} onClick={resetAttendance}>
          Reset
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submitted && !error && (
        <p style={{ color: 'green' }}>Attendance marked successfully!</p>
      )}

      {(attendance.breakfast || attendance.lunch || attendance.dinner) && (
        <>
          <h3>Today's Meals Selected:</h3>
          <ul>
            {attendance.breakfast && <li>Breakfast</li>}
            {attendance.lunch && <li>Lunch</li>}
            {attendance.dinner && <li>Dinner</li>}
          </ul>
        </>
      )}
    </div>
  );
}
