import { createContext, useContext, useEffect, useState } from 'react';

// 1. Create the context
const AppContext = createContext();

// 2. Create a provider component
export const AppProvider = ({ children }) => {
  const [attendance, setAttendance] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('attendence');
    if(saved) {
      setAttendance(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('attendence', JSON.stringify(attendance));
  }, [attendance]);
  
  const markAttendance = (meal, value) => {
    setAttendance((prev) => ({
      ...prev,
      [meal]: value,
    }));
  };

  const resetAttendance = () => {
    setAttendance({
      breakfast: false,
      lunch: false,
      dinner: false,
    })
  }
  return (
    <AppContext.Provider value={{ attendance, markAttendance, resetAttendance }}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom hook to use context easily
export const useAppContext = () => useContext(AppContext);
