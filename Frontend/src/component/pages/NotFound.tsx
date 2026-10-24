import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";

export default function NotFound() {
  return (
    <Box title="404 - Page Not Found">
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Go back to home page.</p>
    
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    </Box>
  )
}