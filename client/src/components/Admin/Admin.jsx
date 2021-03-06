import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import CreateAdmin from './components/Admins/CreateAdmin.jsx';
import SearchAdmin from './components/Admins/SearchAdmin.jsx';
import DeleteAdmin from './components/Admins/DeleteAdmin.jsx';
import ListAdmins from './components/Admins/ListAdmins.jsx';
import CreateStudent from './components/Students/CreateStudent.jsx';
import CreateTeacher from './components/Teachers/CreateTeacher.jsx';
import DeleteTeacher from './components/Teachers/DeleteTeacher.jsx';
import ListTeachers from './components/Teachers/ListTeachers.jsx';
import SearchTeacher from './components/Teachers/SearchTeacher.jsx'

class Admin extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4 mb-4"> <strong>Admin Dashboard</strong></h1>
                            <ul className="nav nav-pills">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Admins</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/CreateAdmin">Add New Admin</Link>
                                        <Link className="dropdown-item" to="/ListAdmins">List Admins</Link>
                                        <Link className="dropdown-item" to="/SearchAdmin">Find Admin</Link>
                                        <Link className="dropdown-item" to="/DeleteAdmin">Delete Admin</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Teachers</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/CreateTeacher">Add New Teacher</Link>
                                        <Link className="dropdown-item" to="/ListTeachers">List Teachers</Link>
                                        <Link className="dropdown-item" to="/SearchTeacher">Find Teacher</Link>
                                        <Link className="dropdown-item" to="/DeleteTeacher">Delete Teacher</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Students</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/CreateStudent">Add New Student</Link>
                                        <Link className="dropdown-item" to="/CreateStudent">Show Grades</Link>
                                        <Link className="dropdown-item" to="/CreateStudent">Show Progress</Link>
                                        <Link className="dropdown-item" to="/CreateStudent">Delete Student</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Parents</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/CreateStudent">Add New Parent</Link>
                                        <Link className="dropdown-item" to="/CreateStudent">Show Children</Link>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/CreateStudent">Chat</Link>
                                </li>
                            </ul>
                        </div>

                        <Switch>
                            <Route exact path="/CreateAdmin" component={CreateAdmin} />
                            <Route exact path="/ListAdmins" component={ListAdmins} />
                            <Route exact path="/SearchAdmin" component={SearchAdmin} />
                            <Route exact path="/DeleteAdmin" component={DeleteAdmin} />

                            <Route exact path="/CreateStudent" component={CreateStudent} />

                            <Route exact path="/CreateTeacher" component={CreateTeacher} />
                            <Route exact path="/ListTeachers" component={ListTeachers} />
                            <Route exact path="/SearchTeacher" component={SearchTeacher} />
                            <Route exact path="/DeleteTeacher" component={DeleteTeacher} />
                        </Switch>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default Admin;