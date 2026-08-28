import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar color="primary" sx={{ borderRadius: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h2" component="div">
          Dominique de Loppinot
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
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
      </Toolbar>
    </AppBar>
  );
}
