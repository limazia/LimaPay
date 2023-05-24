import { Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { CustomRoutes } from "@components/CustomRoutes";

import { App } from "./App";

export function Router() {
  return (
    <AnimatePresence mode="wait">
      <CustomRoutes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </CustomRoutes>
    </AnimatePresence>
  );
}
