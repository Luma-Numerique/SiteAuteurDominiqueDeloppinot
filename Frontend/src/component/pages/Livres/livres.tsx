import { Box, Button, FormControl, InputLabel, MenuItem, Pagination, Select, Typography } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";
import { useLivres } from "../../../utils/livresContext";
import { BookCard } from "../../commons/bookCard";

export function Livres() {
  const { livres } = useLivres();
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const pageCount = Math.ceil(livres.length / rowsPerPage);
  const currentPage = Math.min(page, Math.max(pageCount, 1));
  const visibleLivres = livres.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <Box sx={{ display: "grid", gap: 3, p: 2 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Mes Livres
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, ml: "auto", alignItems: "center" }}>
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel id="books-per-page-label">Par page</InputLabel>
            <Select
              labelId="books-per-page-label"
              id="books-per-page"
              value={rowsPerPage}
              label="Par page"
              onChange={(event) => {
                setRowsPerPage(Number(event.target.value));
                setPage(1);
              }}
            >
              {[6, 12, 24].map((option) => (
                <MenuItem key={option} value={option}>
                  {option} livres
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
        {visibleLivres.map((livre) => (
          <Box key={livre.id} sx={{ width: "100%" }}>
            <BookCard book={livre} variant={viewMode} />
          </Box>
        ))}
      </Box>

      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={(_, selectedPage) => setPage(selectedPage)}
          color="primary"
          sx={{ display: "flex", justifyContent: "center" }}
          aria-label="Pagination des livres"
        />
      )}
    </Box>
  );
}
