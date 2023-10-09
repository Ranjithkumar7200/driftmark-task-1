import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import Forgot from "./Components/pages/Forgot";
import Reset from "./Components/pages/Reset";
import MainNav from "./Components/pages/MainNav";
import AdminDashboard from "./Components/pages/AdminDashboard";
import EmployeeDashboard from "./Components/pages/EmployeeDashboard";
import Designation from "./Components/pages/Designation";
import Sidebar from "./Components/pages/Sidebar";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav /> 
        <Container fluid className="">
          <Row>
          <Col className="" lg={"2"} xxl={"2"} xl={"2"}>
          <Sidebar/>
          </Col>
          <Col lg={"9"} xxl={"10"} xl={"10"} md={"12"} sm={"12"}>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/designation" element={<Designation/>} />
          <Route path="/employee" element={<EmployeeDashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
          </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
