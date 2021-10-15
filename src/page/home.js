import React from 'react';
import TheMap from '../map/geolocation';
import BottomAppBar from '../template/appBar';
import MyMap from './../map/map'
function Home(props) {
    return (
        <React.Fragment>
            <div
                style={{
                    minHeight: `calc(100vh - 60px)`
                }}>
                <MyMap {...[92.8324102, 20.1598002]} />
                {/* <TheMap/> */}
            </div>
            <BottomAppBar />
        </React.Fragment>
    );
}

export default Home;