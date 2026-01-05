import { useParams } from "react-router-dom";
import appointments from "../data/appointments";
import { Card, CardContent, Typography } from "@mui/material";

function AppointmentViewPage() {
  const { id } = useParams();
  const appointment = appointments.find(
    (a) => a.id === parseInt(id)
  );

  if (!appointment) {
    return <Typography>No appointment found</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 500, marginTop: 3 }}>
      <CardContent>
        <Typography variant="h6">Appointment Details</Typography>
        <Typography><b>Name:</b> {appointment.patientName}</Typography>
        <Typography><b>Age:</b> {appointment.age}</Typography>
        <Typography><b>Doctor:</b> {appointment.doctor}</Typography>
        <Typography><b>Date:</b> {appointment.date}</Typography>
        <Typography><b>Diagnosis:</b> {appointment.diagnosis}</Typography>
      </CardContent>
    </Card>
  );
}

export default AppointmentViewPage;
