import React from 'react';
import BottomAppBar from '../template/appBar';
import MyMap from './../map/map'
function Home(props) {
    return (
        <React.Fragment>
            <MyMap {...[92.8324102,20.1598002]}/>
            <BottomAppBar />
        </React.Fragment>
    );
}

export default Home;