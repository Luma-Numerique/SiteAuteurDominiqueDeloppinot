import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LivresProvider } from "./utils/livresContext";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <LivresProvider>
        <App />
      </LivresProvider>
    </ThemeProvider>
  </BrowserRouter>
);