import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { SlCalender} from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import '../pages/Css/Sidebar.css'
import { GrUserAdmin } from 'react-icons/gr';
import { BiNotepad, BiSolidPieChartAlt2, BiSolidUser, BiSolidUserDetail } from 'react-icons/bi';
import { SiGooglesheets } from 'react-icons/si';

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
    <div className='rounded 'style={{marginRight:"5px"}} >
    <Container fluid className='d-sm-none  d-md-none d-lg-block d-xxl-block d-xl-block  justify-content-start align-items-start d-none ' style={{backgroundColor:"#313947",height:"92vh",width:"100%",overflowY:"auto",marginLeft:"-12px",opacity:""}}>
        <Row className='mt-4 mb-3 ' style={{cursor:"pointer",}} onClick={handleAdminDashboardClick}>
          
          <h6 className='d-flex align-items-center' style={{fontSize:"15px",color:"white"}}><GrUserAdmin  size={20} style={{marginRight:"10px"}}/>Admin Dashboard</h6>
        </Row>
        <Row className='mt-3 mb-3' style={{cursor:"pointer"}}>
        <h6 onClick={handleEmployeeDashboardClick} className='d-flex align-items-center' style={{fontSize:"15px"}}><BiSolidUserDetail size={20} style={{marginRight:"10px"}}/> Employee Dashboard</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px"}}><BiSolidUser size={20} style={{marginRight:"10px"}}/> Employee</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px"}}> <BiNotepad  size={20} style={{marginRight:"10px"}}/>Attendance</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px"}}><SiGooglesheets size={20} style={{marginRight:"10px"}}/>Time Sheet</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px"}}><SlCalender size={20} style={{marginRight:"10px"}}/>Leave</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px"}} onClick={handleDesignationClick}><BiSolidUser size={20} style={{marginRight:"10px"}}/>Designation</h6>
        </Row>
        <Row className='mt-3 mb-3'style={{cursor:"pointer"}}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px"}}><BiSolidPieChartAlt2 size={20} style={{marginRight:"10px"}}/>Report</h6>
        </Row>
        
     
    </Container>
    </div>
  )
}

export default Sidebar
