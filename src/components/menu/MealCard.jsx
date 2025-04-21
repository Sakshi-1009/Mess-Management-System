import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem } from '@mui/material';
import { getMealIcon } from '../../utils/mealHelpers';

export default function MealCard({ meal, items }) {
    const MealIcon = getMealIcon(meal);
    
    return (
        <Card elevation={2} sx={{ height: '100%', transition: 'transform 0.2s' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MealIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                        {meal}
                    </Typography>
                </Box>
                <List disablePadding>
                    {items.map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                            <Typography variant="body1">{item}</Typography>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}
