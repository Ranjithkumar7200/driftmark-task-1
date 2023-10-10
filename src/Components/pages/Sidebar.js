import React, { useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { SlCalender} from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import '../pages/Css/Sidebar.css'
import { GrUserAdmin } from 'react-icons/gr';
import { BiNotepad, BiSolidPieChartAlt2, BiSolidUser, BiSolidUserDetail } from 'react-icons/bi';
import { SiGooglesheets } from 'react-icons/si';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

const Sidebar = () => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null);
    
    const handleAdminDashboardClick = (item) => {
        // Navigate to the "Employee" route when the text is clicked
        navigate("/");
        setSelectedItem(item);
        
      };
      const handleEmployeeDashboardClick = (item) => {
        // Navigate to the "Employee" route when the text is clicked
        navigate("/employee");
        setSelectedItem(item);
        
      };
      const handleDesignationClick = (item) => {
        // Navigate to the "Employee" route when the text is clicked
        navigate("/designation");
        setSelectedItem(item);
        
      };
  return (
    <div className='rounded 'style={{marginRight:"5px"}} >
    <Container fluid className='d-sm-none  d-md-none d-lg-block d-xxl-block d-xl-block  justify-content-start align-items-start d-none ' style={{backgroundColor:"#313947",height:"92vh",width:"100%",overflowY:"auto",marginLeft:"-12px",opacity:""}}>
        <Row className={`mt-3 mb-3 p-2 d-flex align-items-center ${selectedItem === 'adminDashboard' ? 'active' : ''}`} style={{cursor:"pointer",color:"white"}} onClick={() => handleAdminDashboardClick('adminDashboard')}
         onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#00d4ff";
          e.currentTarget.style.color = "black";
        }}
        onMouseLeave={(e) => {
          if (selectedItem !== 'adminDashboard') {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "white";
          }
        }}>
          
          <h6 className='d-flex align-items-center ' ><MdOutlineAdminPanelSettings  size={20} style={{marginRight:"10px",}}/>Admin Dashboard</h6>
        </Row>
        <Row className={`mt-3 mb-3 p-2 d-flex align-items-center ${selectedItem === 'employeeDashboard' ? 'active' : ''}`} style={{cursor:"pointer",color:"white"}} onClick={() => handleEmployeeDashboardClick('employeeDashboard')} 
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#00d4ff";
          e.currentTarget.style.color = "black";
        }}
        onMouseLeave={(e) => {
          if (selectedItem !== 'employeeDashboard') {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "white";
          }
        }}>
        <h6  className='d-flex align-items-center' style={{fontSize:"15px",}}><BiSolidUserDetail size={20} style={{marginRight:"10px"}}/> Employee Dashboard</h6>
        </Row>
        <Row className='mt-3 mb-3 p-2 d-flex align-items-center'style={{cursor:"pointer",color:"white"}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><BiSolidUser size={20} style={{marginRight:"10px",}}/> Employee</h6>
        </Row>
        <Row className='mt-3 mb-3 p-2 d-flex align-items-center'style={{cursor:"pointer",color:"white"}}onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}> <BiNotepad  size={20} style={{marginRight:"10px",}}/>Attendance</h6>
        </Row>
        <Row className='mt-3 mb-3 p-2 d-flex align-items-center'style={{cursor:"pointer",color:"white"}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><SiGooglesheets size={20} style={{marginRight:"10px",}}/>Time Sheet</h6>
        </Row>
        <Row className='mt-3 mb-3 p-2 d-flex align-items-center'style={{cursor:"pointer",color:"white"}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}> 
            <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><SlCalender size={20} style={{marginRight:"10px",}}/>Leave</h6>
        </Row>
        <Row className={`mt-3 mb-3 p-2 d-flex align-items-center ${selectedItem === 'designation' ? 'active' : ''}`}style={{cursor:"pointer",color:"white"}} onClick={() => handleDesignationClick('designation')} 
         onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#00d4ff";
          e.currentTarget.style.color = "black";
        }}
        onMouseLeave={(e) => {
          if (selectedItem !== 'designation') {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "white";
          }
        }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}} ><BiSolidUser size={20} style={{marginRight:"10px",}}/>Designation</h6>
        </Row>
        <Row className='mt-3 mb-3 p-2 d-flex align-items-center'style={{cursor:"pointer",color:"white"}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><BiSolidPieChartAlt2 size={20} style={{marginRight:"10px",}}/>Report</h6>
        </Row>
        
     
    </Container>
    </div>
  )
}

export default Sidebar
