import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import AppointmentsPage from "./pages/AppointmentsPage";
import AppointmentViewPage from "./pages/AppointmentViewPage";
import DiagnosisPage from "./pages/DiagnosisPage";

import { Box, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          <Typography variant="h4" align="center" gutterBottom>
            Hospital Management
          </Typography>

          <Routes>
            <Route path="/" element={<Navigate to="/appointments" />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/appointments/:id" element={<AppointmentViewPage />} />
            <Route path="/diagnosis" element={<DiagnosisPage />} />
          </Routes>

        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;

