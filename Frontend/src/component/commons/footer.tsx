import { Box, Grid, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        padding: 1,
      }}
    >
      <Typography variant="body2">@Dominique de Lopptinot 2026</Typography>
    </Box>

  );
}
