import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Toastify } from "@components/Toastify";
import { FormProvider } from "@contexts/FormContext";
import { Router } from "./Router";

import "./styles/styles.css";

const rootElement = document.getElementById("app");

if (rootElement) {
  createRoot(rootElement as HTMLElement).render(
    <BrowserRouter>
      <FormProvider>
        <Router />
        <Toastify autoClose={5000} />
      </FormProvider>
    </BrowserRouter>
  );
}
