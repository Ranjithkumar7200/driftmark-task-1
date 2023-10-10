import React, { useState } from "react";
import MainLogo from "../Images/logo.jpeg";
import {
  Accordion,
  Badge,
  Col,
  Container,
  Dropdown,
  Form,
  Offcanvas,
  Row,
} from "react-bootstrap";

import {
  AiOutlineMenu,
  
} from "react-icons/ai";
import { BsThreeDotsVertical} from "react-icons/bs";



import { Link, useNavigate } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { BiNotepad, BiSolidPieChartAlt2, BiSolidUser, BiSolidUserDetail } from "react-icons/bi";
import { SiGooglesheets } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const languages = [
  {
    img: "https://www.worldometers.info/img/flags/in-flag.gif",
    langName: "English",
  },
  {
    img: "https://www.worldometers.info/img/flags/in-flag.gif",
    langName: "Spanish",
  },
  {
    img: "https://www.worldometers.info/img/flags/in-flag.gif",
    langName: "Hindi",
  },
  {
    img: "https://www.worldometers.info/img/flags/in-flag.gif",
    langName: "Tamil",
  },
];

const MainNav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const openLogin = () =>{
    navigate("/login")
  }

  const handleAdminDashboardClick = () => {
    // Navigate to the "Employee" route when the text is clicked
    navigate("/");
    setShow(false);
  };
  const handleEmployeeDashboardClick = () => {
    // Navigate to the "Employee" route when the text is clicked
    navigate("/employee");
    setShow(false);
  };
  const handleDesignationClick = () => {
    // Navigate to the "Employee" route when the text is clicked
    navigate("/designation");
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container
        fluid
        className="d-flex  flex-row flex-wrap-wrap justify-content-between align-items-center overflowX-hidden"
        style={{ backgroundColor: "#00d4ff", position: "sticky", top: "0" }}
      >
        <Row className="d-flex flex-row flex-wrap-wrap justify-content-around align-items-center p-2">
          <Col className="d-lg-none d-xl-none d-sm-flex">
            <AiOutlineMenu
              size={25}
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col
            className='d-lg-flex d-none d-sm-none  flex-row flex-wrap-wrap justify-content-between"align-items-center '
            style={{ marginRight: "100px" }}
          >
            <img
              src={MainLogo}
              width={40}
              className="rounded-circle "
              alt="..."
            ></img>
          </Col>

          {/* <Col className="d-lg-flex d-none d-sm-none">
            <CgMenuLeftAlt
              size={25}
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            />
          </Col> */}
          {/* <Col className="d-lg-flex d-none d-sm-none ">
            <span className="text-dark fw-bold">Welocome</span>
          </Col> */}
        </Row>

        <Row>
          <Col className='d-lg-none d-sm-flex flex-row flex-wrap-wrap justify-content-between"align-items-center '>
            <img
              src={MainLogo}
              width={60}
              className="rounded-circle p-2"
              alt="..."
            ></img>
          </Col>
        </Row>
        <Row className="d-flex mt-1">
          <Col className="d-lg-none d-sm-flex">
            <BsThreeDotsVertical size={25} style={{ cursor: "pointer" }} />
          </Col>
          {/* {/* <Col className="d-lg-flex d-none d-sm-none flex-row justify-content-end align-items-center">
            <Form.Control
              className=""
              size="sm"
              placeholder="Search here.."
              style={{
                borderRadius: "50px",
                paddingRight: "30px",
                backgroundColor: "",
                width: "200px",
              }}
            ></Form.Control>
            <div
              className="position-absolute"
              style={{ cursor: "pointer", padding: "10px" }}
            >
              <BiSearch />
            </div>
          </Col>
          <Col className='d-lg-flex d-none d-sm-none flex-row flex-wrap-wrap justify-content-center"align-items-center'>
            <div style={{ marginTop: "2px" }}>
              <img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                className="rounded"
                style={{ width: "20px", height: "20px" }}
                alt="Avatar"
              />
            </div>
            <Dropdown>
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-basic"
                className="d-flex align-items-center"
              >
                <Dropdown.Header style={{ fontWeight: "bolder" }}>
                  Languages
                </Dropdown.Header>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item to={"/login"}>English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tamil</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Telugu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="d-lg-flex d-none d-sm-none">
            <Row className="">
              <Col className="d-flex flex-row justify-content-center align-items-center">
                <FaRegBell
                  size={20}
                  style={{ marginLeft: "8px", cursor: "pointer" }}
                />
                <Badge
                  className=" d-flex justify-content-start align-items-start"
                  style={{
                    fontSize: "10px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    marginTop: "-20px",
                  }}
                  bg="primary"
                >
                  9
                </Badge>
                <LuMessageCircle
                  size={20}
                  style={{ marginLeft: "8px", cursor: "pointer" }}
                />
                <Badge
                  className=" d-flex justify-content-start align-items-start"
                  style={{
                    fontSize: "10px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    marginTop: "-20px",
                  }}
                  bg="primary"
                >
                  9
                </Badge>
              </Col> 
            </Row>
          </Col> */}
          <Col className='d-lg-flex d-none d-sm-none flex-row flex-wrap-wrap justify-content-center"align-items-center'>
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                style={{ width: "30px" }}
                alt="Avatar"
              />
            </div>
            {/* <Dropdown>
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-basic"
                className="d-flex align-items-center"
              >
                <Dropdown.Header style={{ fontWeight: "bolder" }}>
                  Profile
                </Dropdown.Header>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item to={"/login"} onClick={openLogin}>Login</Dropdown.Item>
                <Dropdown.Item href="#/action-2">My Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Col>
        </Row>
      </Container>

      {/* canvas */}

      <Row className="d-sm-flex d-lg-none d-xl-none d-xxl-none">
        <Offcanvas scroll={true} show={show} onHide={handleClose}>
          <Offcanvas.Header style={{ backgroundColor: "#00d4ff" }} closeButton>
            <Offcanvas.Title
              className="custom-title"
              style={{
                fontSize:"16px" , // Adjust font sizes as needed
              }}
            >
              <img
                src={MainLogo}
                width={60}
                className="rounded-circle p-2"
                alt="..."
              ></img>
              DriftMark Technologies
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{backgroundColor:"#313947"}}>
          <Row className='mt-4 mb-3 p-2 d-flex align-items-center' style={{cursor:"pointer",color:"white"}} onClick={handleAdminDashboardClick} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          
          <h6 className='d-flex align-items-center ' ><MdOutlineAdminPanelSettings  size={20} style={{marginRight:"10px",}}/>Admin Dashboard</h6>
        </Row>
        <Row className='mt-3 mb-3 p-2 d-flex align-items-center' style={{cursor:"pointer",color:"white"}} onClick={handleEmployeeDashboardClick} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
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
        <Row className='mt-3 mb-3 p-2 d-flex align-items-center'style={{cursor:"pointer",color:"white"}} onClick={handleDesignationClick} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}} ><BiSolidUser size={20} style={{marginRight:"10px",}}/>Designation</h6>
        </Row>
        <Row className='mt-3 mb-3 p-2 d-flex align-items-center'style={{cursor:"pointer",color:"white"}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
            <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><BiSolidPieChartAlt2 size={20} style={{marginRight:"10px",}}/>Report</h6>
        </Row>
    
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
    </>
  );
};

export default MainNav;
