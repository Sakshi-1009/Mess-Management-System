import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Rating,
  Box,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function Feedback() {
  const [formData, setFormData] = useState({
    meal: '',
    rating: 3,
    comments: '',
    suggestions: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <RestaurantIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Mess Feedback
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Help us improve your dining experience
          </Typography>
        </Box>

        {submitted && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Thank you for your feedback! We appreciate your input.
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl fullWidth>
              <InputLabel>Select Meal</InputLabel>
              <Select
                name="meal"
                value={formData.meal}
                label="Select Meal"
                onChange={handleChange}
                required
              >
                <MenuItem value="breakfast">Breakfast</MenuItem>
                <MenuItem value="lunch">Lunch</MenuItem>
                <MenuItem value="dinner">Dinner</MenuItem>
              </Select>
            </FormControl>

            <Box>
              <Typography component="legend" gutterBottom>
                Rate your experience
              </Typography>
              <Rating
                name="rating"
                value={formData.rating}
                onChange={(_, value) => {
                  setFormData(prev => ({
                    ...prev,
                    rating: value
                  }));
                }}
                size="large"
              />
            </Box>

            <TextField
              name="comments"
              label="Comments"
              multiline
              rows={4}
              value={formData.comments}
              onChange={handleChange}
              placeholder="Tell us what you liked or didn't like"
            />

            <TextField
              name="suggestions"
              label="Suggestions for Improvement"
              multiline
              rows={3}
              value={formData.suggestions}
              onChange={handleChange}
              placeholder="Share your ideas on how we can improve"
            />

            <Button 
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              Submit Feedback
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
