import React, { Component } from 'react';
import Listing from './bookComponents/Listing';
import Search from './bookComponents/Search';

class Main extends Component {
    render() {
        return (
            <div>
                {/* Your component code here */}
                <Search />
                <Listing />
            </div>
        );
    }
}

export default Main;