import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import type { Livre } from "../../../models";
import { BookCard } from "../../commons/bookCard";

export function Anatole({ listeAnatole }: { listeAnatole: Livre[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (listeAnatole.length === 0) {
    return null;
  }

  const showPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? listeAnatole.length - 1 : index - 1));
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % listeAnatole.length);
  };

  return (
    <Card sx={{ p: 2, height: "100%", overflow: "hidden" }}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Anatole
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Découvrez l'univers d'Anatole et ses aventures captivantes
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto minmax(0, 1fr) auto",
          alignItems: "center",
          gap: 1,
        }}
        aria-live="polite"
      >
        <IconButton onClick={showPrevious} aria-label="Livre Anatole précédent" size="small">
          <ArrowBackIosNew fontSize="small" />
        </IconButton>

        <Box sx={{ minWidth: 0, overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 300ms ease",
            }}
          >
            {listeAnatole.map((livre) => (
              <Box key={livre.id} sx={{ minWidth: "100%", display: "flex", justifyContent: "center" }}>
                <BookCard book={livre} variant="carousel" />
              </Box>
            ))}
          </Box>
        </Box>

        <IconButton onClick={showNext} aria-label="Livre Anatole suivant" size="small">
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mt: 2 }}>
        {listeAnatole.map((livre, index) => (
          <Box
            key={livre.id}
            component="button"
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Afficher ${livre.Titre}`}
            aria-current={index === currentIndex ? "true" : undefined}
            sx={{
              width: 8,
              height: 8,
              p: 0,
              border: 0,
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: index === currentIndex ? "primary.main" : "action.disabled",
            }}
          />
        ))}
      </Box>
    </Card>
  );
}