import { createContext, useContext, useState } from 'react';

// 1. Create the context
const AppContext = createContext();

// 2. Create a provider component
export const AppProvider = ({ children }) => {
  const [attendance, setAttendance] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  const markAttendance = (meal, value) => {
    setAttendance((prev) => ({
      ...prev,
      [meal]: value,
    }));
  };

  return (
    <AppContext.Provider value={{ attendance, markAttendance }}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom hook to use context easily
export const useAppContext = () => useContext(AppContext);
