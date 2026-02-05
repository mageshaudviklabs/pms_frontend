import { useState } from "react";
import LoginPage from "./pages/login";
import SimpleDashboardPage from "./pages/dashboards";


export default function App() {

  const [showDashbords, setShowDashboards] = useState(false);
  return (
    <>
    {/*@ts-ignore*/}
      {showDashbords? <SimpleDashboardPage /> : <LoginPage onNext={() => setShowDashboards(true)} />}
    </>
  );
}
