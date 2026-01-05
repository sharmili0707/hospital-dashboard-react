import appointments from "../data/appointments";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Chip
} from "@mui/material";
import { Link } from "react-router-dom";

function AppointmentList() {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 3, overflowX: "auto" }}>
      <Typography variant="h6" sx={{ padding: 2 }}>
        Appointments
      </Typography>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Email</b></TableCell>
            <TableCell><b>Phone</b></TableCell>
            <TableCell><b>Gender</b></TableCell>
            <TableCell><b>Address</b></TableCell>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Time</b></TableCell>
            <TableCell><b>Department</b></TableCell>
            <TableCell><b>Disease</b></TableCell>
            <TableCell><b>Status</b></TableCell>
            <TableCell><b>Action</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {appointments.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.id}</TableCell>
              <TableCell>{a.patientName}</TableCell>
              <TableCell>{a.email}</TableCell>
              <TableCell>{a.phone}</TableCell>
              <TableCell>{a.gender}</TableCell>
              <TableCell>{a.address}</TableCell>
              <TableCell>{a.date}</TableCell>
              <TableCell>{a.time}</TableCell>
              <TableCell>{a.department}</TableCell>
              <TableCell>{a.diagnosis}</TableCell>
              <TableCell>
                <Chip
                  label={a.status}
                  size="small"
                  color={
                    a.status === "Completed"
                      ? "success"
                      : a.status === "Pending"
                      ? "warning"
                      : "error"
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  component={Link}
                  to={`/appointments/${a.id}`}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AppointmentList;
