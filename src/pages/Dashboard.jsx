import React from "react";
import { useAppContext } from "../context/AppContext";
import { 
    Grid, 
    Paper, 
    Typography, 
    Box, 
    Card, 
    CardContent,
    List,
    ListItem,
    ListItemText,
    Chip
} from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export default function Dashboard() {
    const { attendance } = useAppContext();

    const todaysMenu = {
        breakfast: ["Poha", "Boiled Eggs", "Tea/Coffee"],
        lunch: ["Rice", "Dal", "Mixed Vegetables", "Roti", "Curd"],
        dinner: ["Rice", "Dal Fry", "Paneer Curry", "Roti", "Sweet"]
    };

    const mealTimings = {
        breakfast: "7:30 AM - 9:30 AM",
        lunch: "12:30 PM - 2:30 PM",
        dinner: "7:30 PM - 9:30 PM"
    };

    const announcements = [
        "Special Menu this Sunday!",
        "Monthly mess fee due by 5th",
        "Feedback session this Friday"
    ];

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Mess Dashboard
            </Typography>

            <Grid container spacing={3}>
                {/* Today's Menu */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <RestaurantMenuIcon sx={{ mr: 1 }} />
                            Today's Menu
                        </Typography>
                        <Grid container spacing={2}>
                            {Object.entries(todaysMenu).map(([meal, items]) => (
                                <Grid item xs={12} key={meal}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography variant="h6" color="primary" gutterBottom sx={{ textTransform: 'capitalize' }}>
                                                {meal}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {items.join(", ")}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>

                {/* Meal Timings and Attendance */}
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        {/* Meal Timings */}
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <AccessTimeIcon sx={{ mr: 1 }} />
                                    Meal Timings
                                </Typography>
                                <List>
                                    {Object.entries(mealTimings).map(([meal, time]) => (
                                        <ListItem key={meal}>
                                            <ListItemText 
                                                primary={meal.charAt(0).toUpperCase() + meal.slice(1)}
                                                secondary={time}
                                            />
                                            <Chip 
                                                label={attendance[meal] ? "Marked" : "Not Marked"}
                                                color={attendance[meal] ? "success" : "default"}
                                                size="small"
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>

                        {/* Announcements */}
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <AnnouncementIcon sx={{ mr: 1 }} />
                                    Announcements
                                </Typography>
                                <List>
                                    {announcements.map((announcement, index) => (
                                        <ListItem key={index}>
                                            <ListItemText primary={announcement} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

