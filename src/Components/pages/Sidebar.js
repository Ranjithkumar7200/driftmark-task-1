import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { AiOutlineDashboard } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleAdminDashboardClick = () => {
        // Navigate to the "Employee" route when the text is clicked
        navigate("/");
        
      };
      const handleEmployeeDashboardClick = () => {
        // Navigate to the "Employee" route when the text is clicked
        navigate("/employee");
        
      };
      const handleDesignationClick = () => {
        // Navigate to the "Employee" route when the text is clicked
        navigate("/designation");
        
      };
  return (
    <div className='rounded overflowX-scroll' style={{backgroundColor:"#00d4ff"}}>
    <Container fluid className='d-sm-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-column justify-content-center align-items-start d-none mt-3'>
        <Row className='mt-3 mb-3' style={{cursor:"pointer"}}>
        <h6 onClick={handleAdminDashboardClick}>Admin Dashboard</h6>
        </Row>
        <Row className='mt-3 mb-3' style={{cursor:"pointer"}}>
        <h6 onClick={handleEmployeeDashboardClick}>Employee Dashboard</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6>Employee</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6>Attendance</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6>Time Sheet</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6>Leave</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
        <h6 onClick={handleDesignationClick}>Designation</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6>Report</h6>
        </Row>
    </Container>
    </div>
  )
}

export default Sidebar
