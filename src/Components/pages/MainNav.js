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
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import {
  AiOutlineMenu,
  AiOutlineDashboard,
  AiOutlineAppstore,
  AiOutlineUsergroupAdd,
  AiOutlineProject,
  AiOutlineAccountBook,
  AiOutlinePayCircle,
} from "react-icons/ai";
import { BsThreeDotsVertical, BsTicket } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { SiGoogleadsense } from "react-icons/si";
import { FcSalesPerformance } from "react-icons/fc";
import {
  MdOutlineCancel,
  MdOutlineExitToApp,
  MdOutlinePolicy,
} from "react-icons/md";
import { LiaChartPieSolid, LiaGraduationCapSolid } from "react-icons/lia";
import { GrAnnounce } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

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

          <Col className="d-lg-flex d-none d-sm-none">
            <CgMenuLeftAlt
              size={25}
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            />
          </Col>
          <Col className="d-lg-flex d-none d-sm-none ">
            <span className="text-dark fw-bold">Welocome</span>
          </Col>
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
          <Col className="d-lg-flex d-none d-sm-none flex-row justify-content-end align-items-center">
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
          </Col>
          <Col className='d-lg-flex d-none d-sm-none flex-row flex-wrap-wrap justify-content-center"align-items-center'>
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                style={{ width: "30px" }}
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
                  Profile
                </Dropdown.Header>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item to={"/login"}>Login</Dropdown.Item>
                <Dropdown.Item href="#/action-2">My Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
                fontSize: window.innerWidth < 768 ? "16px" : "24px", // Adjust font sizes as needed
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
          <Offcanvas.Body>
            <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
              <h4 style={{ color: "#00d4ff" }}>Main</h4>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="text-bold">
                    <AiOutlineDashboard
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Dashboard</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          onClick={handleAdminDashboardClick}
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                        >
                          Admin Dashboard
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          onClick={handleEmployeeDashboardClick}
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                        >
                          Employee Dashboard
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="text-bold">
                    <AiOutlineAppstore
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Apps</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Slack
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Teams
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
            <Row
              className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'
              style={{ marginTop: "20px" }}
            >
              <h4 style={{ color: "#00d4ff" }}>Employees</h4>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="text-bold">
                    <AiOutlineDashboard
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Employees</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          All Employees
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Holidays
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Leaves(Admin)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Leaves(Employee)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Leave Settings
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Attendance (Admin)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Attendance (Employee)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Departments
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          onClick={handleDesignationClick}
                        >
                          Designations
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Timesheet
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Shift & Schedule
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Overtime
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Row>
                  <Col className="m-2">
                    <h5 className="text-bold" style={{ marginLeft: "10px" }}>
                      <AiOutlineUsergroupAdd style={{ marginRight: "10px" }} />{" "}
                      Clients
                    </h5>
                  </Col>
                </Row>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="text-bold">
                    <AiOutlineProject
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Projects</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          HRMS
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          EMS
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Row>
                  <Col className="m-2">
                    <h5 className="text-bold" style={{ marginLeft: "10px" }}>
                      <SiGoogleadsense style={{ marginRight: "10px" }} />
                      Leads
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col className="m-2">
                    <h5 className="text-bold" style={{ marginLeft: "10px" }}>
                      <BsTicket style={{ marginRight: "10px" }} />
                      Tickets
                    </h5>
                  </Col>
                </Row>
              </Accordion>
            </Row>
            <Row
              className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'
              style={{ marginTop: "20px" }}
            >
              <h4 style={{ color: "#00d4ff" }}>HR</h4>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="text-bold">
                    <FcSalesPerformance
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Sales</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          All Employees
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Hollydays
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Leaves(Admin)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Leaves(Employee)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Leave Settings
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Attendance (Admin)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Attendance (Employee)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Departments
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Designations
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Timesheet
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Shift & Schedule
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Overtime
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="text-bold">
                    <AiOutlineAccountBook
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Accounting</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          HRMS
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          EMS
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="text-bold">
                    <AiOutlinePayCircle
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Payroll</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          HRMS
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          EMS
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Row>
                  <Col className="m-2">
                    <h5 className="text-bold" style={{ marginLeft: "10px" }}>
                      <MdOutlinePolicy
                        style={{ marginRight: "10px" }}
                        size={30}
                      />
                      Leads
                    </h5>
                  </Col>
                </Row>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="text-bold">
                    <LiaChartPieSolid
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Reports</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          HRMS
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          EMS
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
            <Row
              className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'
              style={{ marginTop: "20px" }}
            >
              <h4 style={{ color: "#00d4ff" }}>Perfomance</h4>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="text-bold">
                    <LiaGraduationCapSolid
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Perfomance</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          All Employees
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Hollydays
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Leaves(Admin)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Leaves(Employee)
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Leave Settings
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          Attendance (Admin)
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="text-bold">
                    <GoGoal style={{ marginRight: "10px" }} size={30} />
                    <h5>Goals</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          HRMS
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          EMS
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="text-bold">
                    <FaRegPenToSquare
                      style={{ marginRight: "10px" }}
                      size={30}
                    />
                    <h5>Training</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className='d-flex flex-column flex-wrap-wrap justify-content-center"align-items-center'>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          HRMS
                        </h5>
                      </Col>
                      <Col className="m-2">
                        <h5
                          className="text-bold"
                          style={{ marginLeft: "10px" }}
                        >
                          EMS
                        </h5>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Row>
                  <Col className="m-2">
                    <h5 className="text-bold" style={{ marginLeft: "10px" }}>
                      <GrAnnounce style={{ marginRight: "10px" }} size={30} />
                      Promotion
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col className="m-2">
                    <h5 className="text-bold" style={{ marginLeft: "10px" }}>
                      <MdOutlineExitToApp
                        style={{ marginRight: "10px" }}
                        size={30}
                      />
                      Resignation
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col className="m-2">
                    <h5 className="text-bold" style={{ marginLeft: "10px" }}>
                      <MdOutlineCancel
                        style={{ marginRight: "10px" }}
                        size={30}
                      />
                      Termination
                    </h5>
                  </Col>
                </Row>
              </Accordion>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
    </>
  );
};

export default MainNav;
