import React, { useState, useEffect } from 'react';
import Shop from '../view/shop';
import ShopThumbnail from '../view/shop/thumbnail';
import axios from './ajax';
import sample from './index.json'
function Tast(url) {
    const [shops, setShops] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('shop');
            // console.log(request);
            setShops(request.data)
            return request;
        }
        fetchData();
    }, [url]);

    return (
        <React.Fragment>
           <Shop {...sample} />
        </React.Fragment>
    );
}
export default Tast;
