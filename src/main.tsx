import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { FormProvider } from "@contexts/FormContext";
import { Router } from "./Router";

import "./styles/styles.css";

const rootElement = document.getElementById("app");

if (rootElement) {
  createRoot(rootElement as HTMLElement).render(
    <BrowserRouter>
      <FormProvider>
        <Router />
      </FormProvider>
    </BrowserRouter>
  );
}
