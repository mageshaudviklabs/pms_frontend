import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login";
import SimpleDashboardPage from "./pages/dashboards";
import ManagerDashboard from "./layout/managersection";
import AdminDashboard from "./pages/admin/Dashboard";
import EmployeeDashboard from "./dashboard/employee/EmployeeDashboard";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onNext={() => {}} />} />
        <Route path="/dashboards" element={<SimpleDashboardPage />} />
        <Route path="/dashboard/manager" element={<ManagerDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
       <Route path="/dashboard/employee" element={<EmployeeDashboard />} />

        <Route path="*" element={<div className="flex items-center justify-center min-h-screen bg-red-50"><div className="text-center"><h1 className="text-4xl font-bold text-red-600 mb-4">404</h1><p className="text-gray-700 mb-4">Page not found</p><a href="/" className="text-blue-600 hover:underline">Go Home</a></div></div>} />
      </Routes>
    </Router>
  );
}
