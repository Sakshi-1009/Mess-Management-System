import { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Box,
  TablePagination,
} from '@mui/material';

export default function Attendance() {
  const [loading, setLoading] = useState(true);
  const [studentAttendance, setStudentAttendance] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=50');
        const data = await response.json();
        
        const formattedStudents = data.results.map((user, index) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          rollNo: `22CS${String(index + 1).padStart(3, '0')}`,
          roomNo: `${['A', 'B', 'C'][Math.floor(Math.random() * 3)]}${Math.floor(Math.random() * 400) + 100}`,
          breakfast: false,
          lunch: false,
          dinner: false
        }));

        setStudentAttendance(formattedStudents);
      } catch (error) {
        console.error('Error fetching student data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleStudentAttendance = (studentId, meal) => {
    setStudentAttendance((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? { ...student, [meal]: !student[meal] }
          : student
      )
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 4, 
            fontWeight: 'bold', 
            color: 'primary.main',
            textAlign: 'center' 
          }}
        >
          Student Attendance Record
        </Typography>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <TableContainer component={Paper} elevation={2}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'primary.main' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Name</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Roll No</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Room No</TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Breakfast</TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Lunch</TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Dinner</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentAttendance
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((student) => (
                      <TableRow 
                        key={student.id}
                        sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}
                      >
                        <TableCell sx={{ fontSize: '1rem' }}>{student.name}</TableCell>
                        <TableCell sx={{ fontSize: '1rem' }}>{student.rollNo}</TableCell>
                        <TableCell sx={{ fontSize: '1rem' }}>{student.roomNo}</TableCell>
                        {['breakfast', 'lunch', 'dinner'].map((meal) => (
                          <TableCell key={meal} align="center">
                            <Checkbox
                              checked={student[meal]}
                              onChange={() => handleStudentAttendance(student.id, meal)}
                              color="primary"
                            />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={studentAttendance.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </Paper>
    </Container>
  );
}
