import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MealCard from './MealCard';

export default function MenuSection({ todaysMenu }) {
    return (
        <Grid item xs={12} md={10}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2, background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)' }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
                    <RestaurantMenuIcon sx={{ fontSize: 28, mr: 1 }} />
                    Complete Menu Details
                </Typography>
                <Grid container spacing={3}>
                    {Object.entries(todaysMenu).map(([meal, items]) => (
                        <Grid item xs={12} sm={4} key={meal}>
                            <MealCard meal={meal} items={items} />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Grid>
    );
}
