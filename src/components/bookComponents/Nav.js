import React, { Component } from 'react';
import '../../styles/bookComponents/Nav.css';


class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="navbar">
                        <div className="navbar-brand">BooK Xchange </div>
                        <div className="navbar-user">
                            <div className="navbar-user-icon" title="User Info">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M12 13V19M16 16H8" />
                                </svg>
                                <div className="user-info-tooltip">{"rishi"}</div>
                            </div>
                        </div>
                        <button className="btn btn-signout" >Sign Out</button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;