import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Livre } from "../../models";
import imgNotFound from "../../assets/imgNotFound.png";

const truncateText = (text: string, max = 120) =>
  text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;

export function BookCard({
  book,
  variant = "grid",
}: {
  book: Livre;
  variant?: "grid" | "list";
}) {
  const isList = variant === "list";
  const truncated = truncateText(book.Resume, isList ? 110 : 90);
  const imageUrl = book.LienImage || imgNotFound;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isList ? { xs: "column", sm: "row" } : "column",
        width: "100%",
        maxWidth: isList ? 960 : 320,
        alignSelf: "stretch",
        height: "100%",
        margin: isList ? undefined : "0 auto",
        boxShadow: "0 14px 35px rgba(15, 23, 42, 0.08)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        '&:hover': {
          transform: "translateY(-4px)",
          boxShadow: "0 24px 55px rgba(15, 23, 42, 0.14)",
        },
      }}
    >

      <CardMedia
        component="img"
        height={isList ? undefined : 220}
        image={imageUrl}
        alt={book.Titre}
        loading="lazy"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = imgNotFound;
        }}
        sx={{
          width: isList ? { xs: "100%", sm: 220 } : "100%",
          height: isList ? { xs: 220, sm: 180 } : "auto",
          maxHeight: isList ? undefined : 480,
          objectFit: "contain",
          backgroundColor: "#f7fafc",
          display: "block",
          margin: "0 auto",
          flexShrink: 0,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flexGrow: 1, py: 2, px: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
            {book.Titre}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {truncated}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
          <Button size="small" variant={book.Dispo ? "contained" : "outlined"} disabled={!book.Dispo}>
            {book.Dispo ? "Disponible" : "Indisponible"}
          </Button>
          <Button size="small" component="a" href={book.LienAchat} target="_blank" rel="noreferrer">
            Voir
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
