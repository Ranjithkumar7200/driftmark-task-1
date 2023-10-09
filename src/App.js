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

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav /> 
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/designation" element={<Designation/>} />
          <Route path="/employee" element={<EmployeeDashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
