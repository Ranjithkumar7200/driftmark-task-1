import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import MainNav from "./Components/pages/MainNav";
import AdminDashboard from "./Components/pages/AdminDashboard";
import Designation from "./Components/pages/Designation";
import EmployeeDashboard from "./Components/pages/EmployeeDashboard";
import Forgot from "./Components/pages/Forgot";
import Reset from "./Components/pages/Reset";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Components/pages/Sidebar";
import Employee from "./Components/pages/Employee";
import Attendance from "./Components/pages/Attendance";
import TimeSheet from "./Components/pages/TimeSheet";
import Leave from "./Components/pages/Leave";
import Report from "./Components/pages/Report";
import Projects from "./Components/pages/Projects";
import Clients from "./Components/pages/Clients";
import Promotion from "./Components/pages/Promotion";
import Settings from "./Components/pages/Settings";
import UserReport from "./Components/pages/UserReport";
import AttendanceReport from "./Components/pages/AttendanceReport";
import LeaveReport from "./Components/pages/LeaveReport";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        {authenticated && <MainNav />}

        <Container fluid>
          <Row>
            {authenticated && (
              <Col lg={3} xxl={2} xl={2}>
              <Sidebar/>
              </Col>
            )}

            <Col lg={9} xxl={10} xl={10} md={12} sm={12}>
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/reset" element={<Reset />} />

                {/* Private Routes */}
                <Route
                  path="/"
                  element={authenticated ? <AdminDashboard /> : <Navigate to="/login" />}
                />
                <Route
                  path="/designation"
                  element={authenticated ? <Designation /> : <Navigate to="/login" />}
                />
                <Route
                  path="/employeeDashboard"
                  element={authenticated ? <EmployeeDashboard /> : <Navigate to="/login" />}
                />
                <Route
                  path="/employee"
                  element={authenticated ? <Employee /> : <Navigate to="/login" />}
                />
                <Route
                  path="/attendance"
                  element={authenticated ? <Attendance/> : <Navigate to="/login" />}
                />
                <Route
                  path="/timeSheet"
                  element={authenticated ? <TimeSheet/> : <Navigate to="/login" />}
                />
                <Route
                  path="/leave"
                  element={authenticated ? <Leave /> : <Navigate to="/login" />}
                />
                <Route
                  path="/report"
                  element={authenticated ? <Report /> : <Navigate to="/login" />}
                />
                <Route
                  path="/project"
                  element={authenticated ? <Projects/> : <Navigate to="/login" />}
                />
                <Route
                  path="/client"
                  element={authenticated ? <Clients /> : <Navigate to="/login" />}
                />
                <Route
                  path="/setting"
                  element={authenticated ? <Settings/> : <Navigate to="/login" />}
                />
                <Route
                  path="/promotion"
                  element={authenticated ? <Promotion /> : <Navigate to="/login" />}
                />
                <Route
                  path="/userReport"
                  element={authenticated ? <UserReport/> : <Navigate to="/login" />}
                />
                <Route
                  path="/attendanceReport"
                  element={authenticated ? <AttendanceReport/> : <Navigate to="/login" />}
                />
                <Route
                  path="/leaveReport"
                  element={authenticated ? <LeaveReport/> : <Navigate to="/login" />}
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
