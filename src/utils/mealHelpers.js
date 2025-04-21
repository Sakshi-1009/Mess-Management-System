import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

export const getMealIcon = (meal) => {
    switch (meal) {
        case 'breakfast': return FreeBreakfastIcon;
        case 'lunch': return LunchDiningIcon;
        case 'dinner': return DinnerDiningIcon;
        default: return null;
    }
};

export const formatMealTime = (time) => {
    // Add time formatting logic here
};
