// External dependencies
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { Box } from "@mui/system";

// Internal dependencies
import MyCollectionPage from "../pages/MyCollectionPage";
import GameDetailPage from "../pages/GameDetailPage";
import GameFiPage from "../pages/GameFiPage";
import Sidebar from "../components/Sidebar";
import { styles as globalStyles } from "../components/Common/Global.style";
import GameDropsPage from "../pages/GameDropsPage";
import GameProfilePage from "../pages/GameProfilePage";

/**
 * MainRouter Component
 */
export default function MainRouter() {
  return (
    <Box sx={globalStyles.dashboardWrapper}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/drops" element={<GameDropsPage />} />
          <Route path="/my-collection" element={<MyCollectionPage />} />
          <Route path="/game-details" element={<GameDetailPage />} />
          <Route path="/game-fi" element={<GameFiPage />} />
          <Route path="/profile" element={<GameProfilePage />} />
          <Route path="*" element={<Navigate to="game-details" replace />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
