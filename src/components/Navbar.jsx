import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import FeedbackIcon from '@mui/icons-material/Feedback';

export default function Navbar() {
    const location = useLocation();

    return (
        <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        component={Link}
                        to="/"
                        startIcon={<DashboardIcon />}
                        color={location.pathname === '/' ? 'primary' : 'inherit'}
                        variant={location.pathname === '/' ? 'contained' : 'text'}
                    >
                        Dashboard
                    </Button>
                    <Button
                        component={Link}
                        to="/attendence"
                        startIcon={<AssignmentTurnedInIcon />}
                        color={location.pathname === '/attendence' ? 'primary' : 'inherit'}
                        variant={location.pathname === '/attendence' ? 'contained' : 'text'}
                    >
                        Attendance
                    </Button>
                    <Button
                        component={Link}
                        to="/feedback"
                        startIcon={<FeedbackIcon />}
                        color={location.pathname === '/feedback' ? 'primary' : 'inherit'}
                        variant={location.pathname === '/feedback' ? 'contained' : 'text'}
                    >
                        Feedback
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}