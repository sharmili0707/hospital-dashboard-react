import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box
} from "@mui/material";

import EventIcon from "@mui/icons-material/Event";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Link } from "react-router-dom";

const drawerWidth = 220;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1e1e2f",
          color: "white"
        }
      }}
    >
      <Toolbar>
        <Typography variant="h6">Cliniva</Typography>
      </Toolbar>

      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem
            button
            component={Link}
            to="/appointments"
          >
            <ListItemIcon sx={{ color: "white" }}>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Appointments" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/diagnosis"
          >
            <ListItemIcon sx={{ color: "white" }}>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary="Diagnosis" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
