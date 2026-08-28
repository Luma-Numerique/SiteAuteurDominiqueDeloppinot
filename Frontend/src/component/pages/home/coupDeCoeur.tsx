import { Card, Typography } from "@mui/material";
import type { Livre } from "../../../models";

export function CoupDeCoeur( { favoriteList }: { favoriteList: Livre[] } ) {
  return (
    <Card sx={{ padding:2}}>
      <Typography variant="h4">Mes Coups de Coeur</Typography>
      <Typography variant="h6">Sélection spéciale d'œuvres qui me tiennent à cœur</Typography>  
    </Card>
  );
}
