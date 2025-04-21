import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

export default function ImageCard({ type = 'random', menuItems = [], sx = {} }) {
    const [loading, setLoading] = useState(true);
    const [currentMeal, setCurrentMeal] = useState({ time: '', imageUrl: '', name: '' });

    useEffect(() => {
        const loadMealImage = async () => {
            try {
                setLoading(true);
                const menuItem = menuItems[Math.floor(Math.random() * menuItems.length)];
                let searchQuery = '';

                if (!['Tea/Coffee', 'Sweet', 'Curd'].includes(menuItem)) {
                    searchQuery = `indian ${menuItem.toLowerCase()}`;
                } else {
                    searchQuery = `indian ${type} food`;
                }

                const response = await axios.get(
                    `https://pixabay.com/api/?key=49835831-3bdf2675e152ac93f73f6db4d&q=${encodeURIComponent(searchQuery)}&image_type=photo&orientation=horizontal&min_width=800&min_height=600&safesearch=true&category=food&order=popular`
                );

                if (response.data.hits && response.data.hits.length > 0) {
                    const randomIndex = Math.floor(Math.random() * Math.min(3, response.data.hits.length));
                    const selectedImage = response.data.hits[randomIndex];
                    
                    setCurrentMeal({
                        time: type,
                        imageUrl: selectedImage.largeImageURL,
                        name: menuItem
                    });
                } else {
                    setCurrentMeal({
                        time: type,
                        imageUrl: 'https://pixabay.com/get/gd961f449c6f4213434f263026520f8c9474d486f293d4c919b00fd021639b191ff0a5b19767284e1d7c0c8910be57551_1280.jpg',
                        name: menuItem
                    });
                }
            } catch (error) {
                console.error('Error loading meal image:', error);
                setCurrentMeal(prev => ({
                    ...prev,
                    imageUrl: 'https://pixabay.com/get/gd961f449c6f4213434f263026520f8c9474d486f293d4c919b00fd021639b191ff0a5b19767284e1d7c0c8910be57551_1280.jpg'
                }));
            } finally {
                setLoading(false);
            }
        };

        if (menuItems.length > 0) {
            loadMealImage();
        }
    }, [type, menuItems]);

    return (
        <Card 
            elevation={3} 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                maxWidth: '100%',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                },
                ...sx 
            }}
        >
            {loading ? (
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: 200,
                    bgcolor: 'background.paper',
                    width: '100%'
                }}>
                    <CircularProgress size={40} />
                </Box>
            ) : (
                <>
                    <CardMedia
                        component="img"
                        height="220"
                        image={currentMeal.imageUrl}
                        alt={currentMeal.name}
                        sx={{ 
                            objectFit: 'cover',
                            width: '100%',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    />
                    <CardContent sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        p: 2,
                        bgcolor: 'background.paper',
                        transition: 'background-color 0.3s ease'
                    }}>
                        <Typography 
                            variant="h6" 
                            color="primary"
                            sx={{ 
                                fontWeight: 'bold',
                                mb: 1,
                                fontSize: '1.25rem'
                            }}
                        >
                            {currentMeal.name}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                                textTransform: 'capitalize',
                                fontSize: '0.95rem'
                            }}
                        >
                            Featured dish from {currentMeal.time}
                        </Typography>
                    </CardContent>
                </>
            )}
        </Card>
    );
}