import React, { Component } from 'react';
import Listing from './bookComponents/Listing';
import Search from './bookComponents/Search';
import Nav from './bookComponents/Nav';

class Main extends Component {
    render() {
        return (
            <div>
                {/* Your component code here */}
                <Nav/>
                <Search />
                <Listing />
            </div>
        );
    }
}

export default Main;