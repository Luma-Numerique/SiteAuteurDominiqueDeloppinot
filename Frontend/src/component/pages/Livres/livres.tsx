import { Box, Button, Typography } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";
import { useLivres } from "../../../utils/livresContext";
import { BookCard } from "../../commons/bookCard";

export function Livres() {
  const { livres } = useLivres();
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <Box sx={{ display: "grid", gap: 3, p: 2 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Mes Livres
        </Typography>

        <Box sx={{ display: "flex", gap: 1, ml: "auto" }}>
          <Button
            variant={viewMode === "list" ? "contained" : "outlined"}
            onClick={() => setViewMode("list")}
            size="small"
            startIcon={<ViewListIcon />}
          >
            Ligne
          </Button>
          <Button
            variant={viewMode === "grid" ? "contained" : "outlined"}
            onClick={() => setViewMode("grid")}
            size="small"
            startIcon={<AppsIcon />}
          >
            Grille
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns:
            viewMode === "grid"
              ? {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                }
              : "repeat(1, minmax(0, 1fr))",
        }}
      >
        {livres.map((livre) => (
          <Box key={livre.id} sx={{ width: "100%" }}>
            <BookCard book={livre} variant={viewMode} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
