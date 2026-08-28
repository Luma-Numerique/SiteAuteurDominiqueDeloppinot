import { Box, Container } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./component/commons/header";
import { Home } from "./component/pages/home/home";
import { Footer } from "./component/commons/footer";
import { Livres } from "./component/pages/Livres/livres";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Box
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        mt={"64px"}
        sx={(theme)=> ({backgroundColor:theme.palette.background.default})}
      >
        <Container maxWidth="lg" sx={{ paddingTop: "88px", paddingBottom: 4, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livres" element={<Livres />} />
          </Routes>
        </Container>
        <Box width="100%">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
