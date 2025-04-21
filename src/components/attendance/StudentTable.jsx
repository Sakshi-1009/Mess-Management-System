import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';

export default function StudentTable({ students, onAttendanceChange }) {
    return (
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: 'primary.main' }}>
                        <TableCell sx={{ color: 'white' }}>Name</TableCell>
                        <TableCell sx={{ color: 'white' }}>Roll No</TableCell>
                        <TableCell sx={{ color: 'white' }}>Room No</TableCell>
                        {['breakfast', 'lunch', 'dinner'].map(meal => (
                            <TableCell key={meal} align="center" sx={{ color: 'white' }}>
                                {meal.charAt(0).toUpperCase() + meal.slice(1)}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map(student => (
                        <TableRow key={student.id}>
                            {/* ...existing student row code... */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
