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

                                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_429_11217)">
                                        <path d="M4 18C4 15.7908 5.79086 14 8 14H16C18.2091 14 20 15.7908 20 18V18C20 19.1045 19.1046 20 18 20H6C4.89543 20 4 19.1045 4 18V18Z" stroke="#8df277" stroke-width="2.5" stroke-linejoin="round" />
                                        <circle cx="12" cy="6.99997" r="3" stroke="#8df277" stroke-width="2.5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_429_11217">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="user-info-tooltip">{"rishi"}</div>
                            </div>
                        </div>
                        <div>
                            <button className="btn-notification">
                            <svg fill="#8df277" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M5,20 C4.29574335,20 3.82473646,19.2978691 4.05978026,18.6586153 L4.10557281,
                                18.5527864 L5.26099034,16.2419513 C5.69838496,15.3671621 5.94706709,14.4115321 5.99242957,13.4369383 L6,
                                13.1114562 L6,10 C6,7.02693683 8.16238395,4.55892549 11.0001915,4.08292631 L11,
                                3 C11,2.44771525 11.4477153,2 12,2 C12.5522847,2 13,2.44771525 13,3 L13.0008069,
                                4.08309386 C15.7593089,4.54627074 17.8793746,6.89172309 17.9950275,9.75347448 L18,
                                10 L18,13.1114562 C18,14.0895003 18.2049427,15.0554558 18.6002208,15.9474457 L18.7390097,
                                16.2419513 L19.8944272,18.5527864 C20.2093803,19.1826927 19.7920161,19.9179766 19.1151353,
                                19.99363 L19,20 L14,20 C14,21.1045695 13.1045695,22 12,22 C10.8954305,22 10,21.1045695 10,
                                20 L5,20 Z M12,6 C9.85780461,6 8.10892112,7.68396847 8.00489531,9.80035966 L8,10 L8,13.1114562 C8,
                                14.3922282 7.72665274,15.6568768 7.19980168,16.8213437 L7.04984472,17.1363785 L6.61803399,18 L17.381966,
                                18 L16.9501553,17.1363785 C16.3773766,15.9908212 16.0562978,14.7374405 16.0067623,13.4602947 L16,13.1114562 L16,
                                10 C16,7.790861 14.209139,6 12,6 Z" />
                            </svg>
                            </button>
                        </div>
                        <button className="btn btn-signout" >Sign Out</button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;