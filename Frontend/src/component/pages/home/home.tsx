import { Box, Grid, Paper, Typography } from "@mui/material";
import { CoupDeCoeur } from "./coupDeCoeur";
import { Bubba } from "./bubba";
import { Anatole } from "./anatole";
import { NextEvent } from "./nextEvent";
import { useLivres } from "../../../utils/livresContext";


export function Home() {
  const { livres } = useLivres();
  const favoriteList = livres.filter((book) => book.Favorite === true);

  return (
    <Box sx={{ display: "grid", gap: 4 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          backgroundColor: "#ffffff",
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.05)",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Bienvenue sur le site de Dominique de Loppinot
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.8 }}>
          Explorez un univers littéraire raffiné avec mes livres, mes coups de cœur, et les prochains événements.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid xs={12} md={8}>
          <CoupDeCoeur favoriteList={favoriteList} />
        </Grid>
        <Grid xs={12} md={4}>
          <Anatole />
        </Grid>
        <Grid xs={12} md={4}>
          <Bubba />
        </Grid>
        <Grid xs={12} md={8}>
          <NextEvent />
        </Grid>
      </Grid>
    </Box>
  );
}
