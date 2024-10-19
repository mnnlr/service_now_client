import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Incidents/Home";
import { CreateTask } from "./Components/FromCreateTask/CreateTask";
import { OutLet } from "./Outlet/OutLet";
import { SLAsection } from "./Components/SLAsection/SLAsection";
import Signin from "./Components/Signin&Signup/components/signin";
import Signup from "./Components/Signin&Signup/components/signup";
import IncidentPage from "./Components/Incidents/IncidentsPage";
import AssigneeMePage from "./Components/Incidents/AssigneeMePage";
import UnassigneedTask from "./Components/Incidents/UnassigneedTask";
import ResolvedTask from "./Components/Incidents/ResolvedTask";
import DashBoard from "./Components/DashBoard/DashBoard";
import { AuthProvider } from "./Components/Signin&Signup/context/AuthContext";
import { AuthRoutes } from "./Components/auth/AuthRoutes";


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={
              <AuthRoutes>
                <OutLet />
              </AuthRoutes>
            }>
              <Route index element={<Home />} />
              <Route path="/SLA" element={<SLAsection />} />
              <Route path="/incidents" element={<IncidentPage />} />
              <Route path="/Assign_to_me" element={<AssigneeMePage />} />
              <Route path="/unassigneed_task" element={<UnassigneedTask />} />
              <Route path="/resolved_task" element={<ResolvedTask />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/createtask" element={<CreateTask />} />
            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
