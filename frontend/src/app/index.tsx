import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AppHeader } from "@/features/app/components/app-header";
import { HomePage } from "./home";
import { SubmissionsPage } from "./submissions";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <Router>
      <AppHeader />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data" element={<SubmissionsPage />} />
      </Routes>
    </Router>
  );
}
