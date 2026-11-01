import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <AppBar color="primary" sx={{ borderRadius: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h2" component="div" sx={{ fontSize: { xs: "1.25rem", sm: "2rem" } }}>
          Dominique de Loppinot
        </Typography>

        <Box component="nav" aria-label="Navigation principale" sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Button color="inherit" component={Link} to="/" sx={{ textTransform: "none" }}>
            Accueil
          </Button>
          <Button color="inherit" component={Link} to="/livres" sx={{ textTransform: "none" }}>
            Mes livres
          </Button>
          <Button color="inherit" component={Link} to="/materiel" sx={{ textTransform: "none" }}>
            Matériel pédagogique
          </Button>
          <Button color="inherit" component={Link} to="/animation" sx={{ textTransform: "none" }}>
            Animations
          </Button>
        </Box>

        <IconButton
          color="inherit"
          aria-label="Ouvrir le menu de navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={menuOpen} onClose={closeMenu}>
          <Box sx={{ width: 280 }} role="presentation">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/" onClick={closeMenu}>
                  <ListItemText primary="Accueil" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/livres" onClick={closeMenu}>
                  <ListItemText primary="Mes livres" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/materiel" onClick={closeMenu}>
                  <ListItemText primary="Matériel pédagogique" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/animation" onClick={closeMenu}>
                  <ListItemText primary="Animations" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
