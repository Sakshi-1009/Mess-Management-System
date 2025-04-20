import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import {
  Container,
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

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

  const getMealIcon = (meal) => {
    switch (meal) {
      case 'breakfast':
        return <FreeBreakfastIcon />;
      case 'lunch':
        return <LunchDiningIcon />;
      case 'dinner':
        return <DinnerDiningIcon />;
      default:
        return <RestaurantIcon />;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
          Mark Attendance
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormGroup sx={{ mb: 3 }}>
            {['breakfast', 'lunch', 'dinner'].map((meal) => (
              <FormControlLabel
                key={meal}
                control={
                  <Checkbox
                    checked={attendance[meal]}
                    onChange={(e) => markAttendance(meal, e.target.checked)}
                    icon={getMealIcon(meal)}
                    checkedIcon={getMealIcon(meal)}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                  />
                }
                label={
                  <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                    {meal}
                  </Typography>
                }
                sx={{ mb: 1 }}
              />
            ))}
          </FormGroup>

          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ flex: 1 }}
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="outlined"
              size="large"
              onClick={resetAttendance}
              sx={{ flex: 1 }}
            >
              Reset
            </Button>
          </Box>
        </form>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {submitted && !error && (
          <Alert severity="success" sx={{ mb: 2 }}>Attendance marked successfully!</Alert>
        )}

        {(attendance.breakfast || attendance.lunch || attendance.dinner) && (
          <>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              Today's Selected Meals
            </Typography>
            <List>
              {Object.entries(attendance).map(([meal, isSelected]) => (
                isSelected && (
                  <ListItem key={meal}>
                    <ListItemIcon>
                      {getMealIcon(meal)}
                    </ListItemIcon>
                    <ListItemText 
                      primary={meal.charAt(0).toUpperCase() + meal.slice(1)}
                      sx={{ textTransform: 'capitalize' }}
                    />
                  </ListItem>
                )
              ))}
            </List>
          </>
        )}
      </Paper>
    </Container>
  );
}
