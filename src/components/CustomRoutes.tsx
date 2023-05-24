import { ReactNode, useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

export const CustomRoutes = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState(false);
  const [prevLocation, setPrevLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    setProgress(true);
    setPrevLocation(location.pathname);
  }, [location]);

  useEffect(() => {
    if (prevLocation === location.pathname) {
      setProgress(false);
      setPrevLocation("");
    }
  }, [prevLocation, location.pathname]);

  TopBarProgress.config({
    barColors: {
      0: "#2d2d77",
      0.5: "#27277d",
      1.0: "#212183",
    },
  });

  return (
    <>
      {progress && <TopBarProgress />}
      <Routes key={location.pathname} location={location}>
        {children}
      </Routes>
    </>
  );
};
