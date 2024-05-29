import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#FF6347", // Tomato
  secondary: "#4682B4", // SteelBlue
  accent: "#32CD32", // LimeGreen
  background: "#F5F5F5", // WhiteSmoke
  text: "#2F4F4F", // DarkSlateGray
};

const theme = extendTheme({
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    background: colors.background,
    text: colors.text,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
