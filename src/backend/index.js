import React, { useState, useEffect } from 'react';
import ShopThumbnail from '../view/shop/thumbnail';
import axios from './ajax';

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
            {
                shops.map((shop) => (
                    <ShopThumbnail 
                    shop = {shop} 
                    style = 'card'
                    key={shop.id}/>
                ))
            }
        </React.Fragment>
    );
}
export default Tast;
