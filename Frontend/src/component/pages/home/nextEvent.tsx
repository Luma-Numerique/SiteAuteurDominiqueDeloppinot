import { Card, Typography } from "@mui/material";

export function NextEvent() {
  return (
    <Card sx={{ padding:2}}>
      <Typography variant="h4">Prochain Événement</Typography>
      <Typography variant="h6">Restez à l'écoute pour les détails de mon prochain événement littéraire!</Typography>
    </Card>
  );
}
