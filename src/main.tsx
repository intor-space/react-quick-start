import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { IntorClientProvider } from "./i18n/intor-client-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntorClientProvider>
      <App />
    </IntorClientProvider>
  </StrictMode>,
);
