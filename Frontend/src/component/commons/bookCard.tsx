import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Livre } from "../../models";
import imgNotFound from "../../assets/imgNotFound.png";

const localCoverUrls = import.meta.glob("../../assets/BooksCover/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const coverUrlByBookId = Object.fromEntries(
  Object.entries(localCoverUrls).map(([path, url]) => {
    const filename = path.split("/").pop() ?? "";
    const bookId = filename.replace(/\.[^.]+$/, "");
    return [bookId, url];
  })
);

const truncateText = (text: string, max = 120) =>
  text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;

export function BookCard({
  book,
  variant = "grid",
}: {
  book: Livre;
  variant?: "grid" | "list"| "carousel";
}) {
  const isGrid = variant === "grid";
  const isList = variant === "list";
  const isCarousel = variant === "carousel";
  const truncated = truncateText(
    book.Resume,
    isGrid ? 90 : isList ? 350 : 200
  );
  const imageUrl = coverUrlByBookId[book.id] || book.LienImage || imgNotFound;

  const cardContent = (
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
  );

  const image = (
    <CardMedia
      component="img"
      image={imageUrl}
      alt={book.Titre}
      loading="lazy"
      onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = imgNotFound;
      }}
      sx={{ objectFit: "contain", backgroundColor: "#f7fafc", display: "block", flexShrink: 0 }}
    />
  );

  const cardSx = {
    width: "100%",
    alignSelf: "stretch",
    boxShadow: "0 14px 35px rgba(15, 23, 42, 0.08)",
    transition: "transform 220ms ease, box-shadow 220ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 24px 55px rgba(15, 23, 42, 0.14)",
    },
  };

  return (
    <>
      {isGrid && (
        <Card sx={{ ...cardSx, display: "flex", flexDirection: "column", maxWidth: 320, height: "100%", margin: "0 auto" }}>
          {image}
          {cardContent}
        </Card>
      )}

      {isList && (
        <Card sx={{ ...cardSx, display: "flex", flexDirection: { xs: "column", sm: "row" }, maxWidth: 960, height: "100%" }}>
          <Box sx={{ width: { xs: "100%", sm: 220 }, flexShrink: 0, "& img": { width: "100%", height: { xs: 220, sm: 180 } } }}>
            {image}
          </Box>
          {cardContent}
        </Card>
      )}

      {isCarousel && (
        <Card sx={{ ...cardSx, display: "flex", flexDirection: { xs: "column", sm: "row" }, maxWidth: 520, height: { xs: "auto", sm: 260 } }}>
          <Box sx={{ width: { xs: "100%", sm: 150 }, flexShrink: 0, "& img": { width: "100%", height: { xs: 220, sm: 260 } } }}>
            {image}
          </Box>
          {cardContent}
        </Card>
      )}
    </>
  );
}
