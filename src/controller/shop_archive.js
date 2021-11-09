import React, { useState, useEffect } from 'react';
import ShopThumbnail from '../view/shop/thumbnail';
import axios from 'axios';

function ShopArchive(prams) {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(process.env);
        async function fetchData() {
            setLoading(true);
            setError(false);
            window.scrollTo(0, 0);
            // await axios.get(`shop/search/${prams.search}`)
                await axios.get(`${process.env.REACT_APP_BASE_URL}/shop/`)
                .then((res) => {
                    setShops(res.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                    console.log(error);
                });
        }
        fetchData();
    }, [prams]);

    return (
        <React.Fragment>
            {
                loading == true ?
                    [...Array(7)].map((e, i) => <ShopThumbnail shop="loading" key={i} />) :
                    error !== false ? error.message :
                        shops.map((shop) => (
                            <ShopThumbnail
                                shop={shop}
                                style='card'
                                key={shop.id} />
                        ))
            }
        </React.Fragment>
        
    );
}
export default ShopArchive;
