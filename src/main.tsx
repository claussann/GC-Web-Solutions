import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

/** Punto di ingresso: collega l'applicazione React al div #root di index.html. */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento #root non trovato in public/index.html.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
