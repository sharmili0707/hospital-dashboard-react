import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Card,
  CardContent,
  Grid
} from "@mui/material";

import {
  Edit,
  Delete,
  Person,
  Favorite,
  CalendarToday
} from "@mui/icons-material";

const Diagnosis = () => {
  const [diagnosisList, setDiagnosisList] = useState([]);
  const [diagnosisInput, setDiagnosisInput] = useState("");

  const handleAdd = () => {
    if (diagnosisInput.trim() === "") return;
    setDiagnosisList([
      ...diagnosisList,
      {
        id: Date.now(),
        name: diagnosisInput,
        description: "Added notes and description"
      }
    ]);
    setDiagnosisInput("");
  };

  const handleDelete = (id) => {
    setDiagnosisList(diagnosisList.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const newName = prompt("Edit diagnosis name:");
    if (newName) {
      setDiagnosisList(
        diagnosisList.map((item) =>
          item.id === id ? { ...item, name: newName } : item
        )
      );
    }
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f0f2f5", minHeight: "100vh" }}>
      <Typography variant="h5" sx={{ mb: 3, color: "#1976d2", fontWeight: 600 }}>
        Patient Diagnosis Dashboard
      </Typography>

      {/* ================= TOP CARDS ================= */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {/* Patient Info */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%", boxShadow: 4, borderLeft: "6px solid #1976d2" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Person sx={{ color: "#1976d2", mr: 1 }} />
                <Typography variant="h6" sx={{ color: "#1976d2" }}>
                  Patient Info
                </Typography>
              </Box>
              <Typography>Name: john Doe</Typography>
              <Typography>Age: 32</Typography>
              <Typography>Gender: Male</Typography>
              <Typography>Phone: 9876543210</Typography>
              <Typography>Email: john@gmail.com</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Vitals */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%", boxShadow: 4, borderLeft: "6px solid #43a047" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Favorite sx={{ color: "#43a047", mr: 1 }} />
                <Typography variant="h6" sx={{ color: "#43a047" }}>
                  Vitals
                </Typography>
              </Box>
              <Typography>BP: 120/80 mmHg</Typography>
              <Typography>Heart Rate: 72 bpm</Typography>
              <Typography>Temperature: 98.6°F</Typography>
              <Typography>Weight: 70 kg</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ================= MIDDLE SECTION ================= */}
      <Grid container spacing={3}>
        {/* Diagnosis Table */}
        <Grid item xs={12} md={8}>
          {/* Add Diagnosis */}
          <Box sx={{ display: "flex", mb: 2 }}>
            <TextField
              label="Diagnosis Name"
              size="small"
              fullWidth
              value={diagnosisInput}
              onChange={(e) => setDiagnosisInput(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ ml: 2 }}
              onClick={handleAdd}
            >
              + Add
            </Button>
          </Box>

          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table size="small">
              <TableHead sx={{ bgcolor: "#1976d2" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>#</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Test Name</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Description</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {diagnosisList.map((item, index) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      "&:nth-of-type(odd)": { bgcolor: "#fafafa" },
                      "&:hover": { bgcolor: "#e3f2fd" }
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      <IconButton color="primary" onClick={() => handleEdit(item.id)}>
                        <Edit />
                      </IconButton>
                      <IconButton color="error" onClick={() => handleDelete(item.id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                {diagnosisList.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No diagnosis added
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Previous Visits */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", boxShadow: 4, borderLeft: "6px solid #ff9800" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CalendarToday sx={{ color: "#ff9800", mr: 1 }} />
                <Typography variant="h6" sx={{ color: "#ff9800" }}>
                  Previous Visits
                </Typography>
              </Box>
              <Typography>05 Jan 2025</Typography>
              <Typography>12 Dec 2024</Typography>
              <Typography>20 Nov 2024</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Diagnosis;
