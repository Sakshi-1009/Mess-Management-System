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
    Chip,
    Container,
    Divider
} from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import ImageCard from "../components/ImageCard";

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

    return (
        <Container maxWidth="false" sx={{ py: 3, px: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Typography 
                    variant="h4" 
                    sx={{ 
                        mb: 4, 
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'primary.main',
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60px',
                            height: '4px',
                            backgroundColor: 'primary.main',
                            borderRadius: '2px'
                        }
                    }}
                >
                    Today's Menu
                </Typography>

                {/* Three meal images in a row */}
                <Grid 
                    container 
                    spacing={4} 
                    sx={{ 
                        mb: 6,
                        display: 'flex',
                        alignItems: 'stretch'
                    }}
                >
                    <Grid 
                        item 
                        xs={12} 
                        md={4} 
                        sx={{ 
                            display: 'flex',
                            alignItems: 'stretch',
                            transform: 'translateY(0)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                    >
                        <Box sx={{ width: '100%', display: 'flex' }}>
                            <ImageCard 
                                type="breakfast"
                                menuItems={todaysMenu.breakfast}
                            />
                        </Box>
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        md={4}
                        sx={{ 
                            display: 'flex',
                            alignItems: 'stretch'
                        }}
                    >
                        <Box sx={{ width: '100%', display: 'flex' }}>
                            <ImageCard 
                                type="lunch"
                                menuItems={todaysMenu.lunch}
                            />
                        </Box>
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        md={4}
                        sx={{ 
                            display: 'flex',
                            alignItems: 'stretch'
                        }}
                    >
                        <Box sx={{ width: '100%', display: 'flex' }}>
                            <ImageCard 
                                type="dinner"
                                menuItems={todaysMenu.dinner}
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Menu and Timings Section */}
                <Grid container spacing={3}>
                    {/* Complete Menu Section */}
                    <Grid item xs={12} md={10}>
                        <Paper elevation={3} sx={{ 
                            p: 4, 
                            borderRadius: 2,
                            background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
                            position: 'relative',
                            overflow: 'hidden',
                            height: '100%' // Ensure full height
                        }}>
                            <Box sx={{ 
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '4000px',
                                background: 'linear-gradient(to right, primary.light, primary.main)'
                            }} />
                            
                            <Typography variant="h5" sx={{ 
                                mb: 3,
                                fontWeight: 'bold',
                                color: 'primary.main',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                                <RestaurantMenuIcon sx={{ fontSize: 28 }} />
                                Complete Menu Details
                            </Typography>
                            
                            <Grid container spacing={3}>
                                {Object.entries(todaysMenu).map(([meal, items]) => (
                                    <Grid item xs={12} sm={4} key={meal}>
                                        <Card 
                                            elevation={2}
                                            sx={{ 
                                                height: '100%',
                                                transition: 'transform 0.2s, box-shadow 0.2s',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: 4
                                                }
                                            }}
                                        >
                                            <CardContent>
                                                <Box sx={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center',
                                                    mb: 2
                                                }}>
                                                    {meal === 'breakfast' && (
                                                        <FreeBreakfastIcon sx={{ mr: 1, color: 'primary.main' }} />
                                                    )}
                                                    {meal === 'lunch' && (
                                                        <LunchDiningIcon sx={{ mr: 1, color: 'primary.main' }} />
                                                    )}
                                                    {meal === 'dinner' && (
                                                        <DinnerDiningIcon sx={{ mr: 1, color: 'primary.main' }} />
                                                    )}
                                                    <Typography 
                                                        variant="h6" 
                                                        sx={{ 
                                                            textTransform: 'capitalize',
                                                            fontWeight: 'medium',
                                                            color: 'primary.main'
                                                        }}
                                                    >
                                                        {meal}
                                                    </Typography>
                                                </Box>
                                                <List disablePadding>
                                                    {items.map((item, index) => (
                                                        <ListItem 
                                                            key={index}
                                                            disablePadding
                                                            sx={{ 
                                                                py: 0.5,
                                                                position: 'relative',
                                                                pl: 2,
                                                                '&::before': {
                                                                    content: '"•"',
                                                                    position: 'absolute',
                                                                    left: 0,
                                                                    color: 'primary.main'
                                                                }
                                                            }}
                                                        >
                                                            <Typography variant="body1">
                                                                {item}
                                                            </Typography>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>

                    {/* Timings Section */}
                    <Grid item xs={12} md={2}>
                        <Paper 
                            elevation={3} 
                            sx={{ 
                                p: 3,
                                height: '100%', // Match height with menu section
                                width: '100%',
                                textAlign: 'right',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <Box sx={{ 
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '4px',
                                background: 'linear-gradient(to right, primary.light, primary.main)'
                            }} />
                            
                            <Typography variant="h6" sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                mb: 2,
                                pb: 1,
                                borderBottom: '2px solid #eee',
                                fontWeight: 'bold',
                                color: 'primary.main',
                                fontSize: '1.1rem'
                            }}>
                                <AccessTimeIcon sx={{ mr: 1, fontSize: '1.3rem' }} />
                                Timings
                            </Typography>
                            <List dense>
                                {Object.entries(mealTimings).map(([meal, time]) => (
                                    <ListItem 
                                        key={meal}
                                        sx={{
                                            px: 0.5,
                                            py: 1,
                                            borderBottom: '1px solid #eee',
                                            '&:last-child': {
                                                borderBottom: 'none'
                                            }
                                        }}
                                    >
                                        <ListItemText 
                                            primary={meal.charAt(0).toUpperCase() + meal.slice(1)}
                                            secondary={time}
                                            primaryTypographyProps={{
                                                fontWeight: 'medium',
                                                fontSize: '0.9rem',
                                                color: 'primary.main'
                                            }}
                                            secondaryTypographyProps={{
                                                fontSize: '0.8rem'
                                            }}
                                        />
                                        <Chip 
                                            label={attendance[meal] ? "✓" : "×"}
                                            color={attendance[meal] ? "success" : "default"}
                                            size="small"
                                            sx={{ 
                                                ml: 0.5,
                                                minWidth: '32px',
                                                height: '24px'
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

