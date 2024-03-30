import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {
	BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CreateStudent from "./Components/Create";
import EditStudent from "./Components/Edit";
import StudentList from "./Components/List";

const App = () => {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Navbar bg="dark" variant="dark">
						<Container>
							<Navbar.Brand>
								<Link to={"/create-student"}
									className="nav-link">
									React MERN Stack App
								</Link>
							</Navbar.Brand>

							<Nav className="justify-content-end">
								<Nav>
									<Link to={"/create-student"}
										className="nav-link">
										Create Student
									</Link>
								</Nav>

								<Nav>
									<Link to={"/student-list"}
										className="nav-link">
										Student List
									</Link>
								</Nav>
							</Nav>
						</Container>
					</Navbar>
				</header>

				<Container>
					<Row>
						<Col md={12}>
							<div className="wrapper">
								<Switch>
									<Route exact path="/"
										component={CreateStudent} />
									<Route path="/create-student"
										component={CreateStudent} />
									<Route path="/edit-student/:id"
										component={EditStudent} />
									<Route path="/student-list"
										component={StudentList} />
								</Switch>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Router>
	);
};

export default App;
