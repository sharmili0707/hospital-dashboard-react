import appointments from "../data/appointments";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function AppointmentView() {
  return (
    <div style={{ marginTop: 30 }}>
      <Typography variant="h6" gutterBottom>
        Appointment Details
      </Typography>

      <Grid container spacing={2}>
        {appointments.map((a) => (
          <Grid item xs={12} md={6} key={a.id}>
            <Card>
              <CardContent>
                <Typography><b>Name:</b> {a.patientName}</Typography>
                <Typography><b>Age:</b> {a.age}</Typography>
                <Typography><b>Doctor:</b> {a.doctor}</Typography>
                <Typography><b>Date:</b> {a.date}</Typography>
                <Typography><b>Diagnosis:</b> {a.diagnosis}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AppointmentView;
