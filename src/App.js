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

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        {authenticated && <MainNav />}

        <Container fluid>
          <Row>
            {authenticated && (
              <Col lg={2} xxl={2} xl={2}>
              <Sidebar/>
              </Col>
            )}

            <Col lg={10} xxl={10} xl={10} md={12} sm={12}>
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
                  path="/employee"
                  element={authenticated ? <EmployeeDashboard /> : <Navigate to="/login" />}
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
