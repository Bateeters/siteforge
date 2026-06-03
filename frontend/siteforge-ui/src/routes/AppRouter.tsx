import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import RegisterPage from "../pages/RegisterPage";
import EditorPage from "../pages/EditorPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/editor/:websiteId" element={<EditorPage />} />
        </Routes>
   );
}

export default AppRouter