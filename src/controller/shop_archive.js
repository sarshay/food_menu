import React, { useState, useEffect } from 'react';
import ShopThumbnail from '../view/shop/thumbnail';
import axios from 'axios';
import { SearchShop } from '../components/searchForm';
import { lang, SarShaySay } from '../components/message';
function ShopArchive(d) {

    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    var path = d.filter == "name" && d.value !== '' ? `search/${d.value}` : ''
    var params = d.params
    useEffect(() => {
        console.log(process.env);
        async function fetchData() {
            setLoading(true);
            setError(false);
            window.scrollTo(0, 0);
            await axios.get(`${process.env.REACT_APP_BASE_URL}/shop/${path}`,
                { params: params }
            )
                // await axios.get(`${process.env.REACT_APP_BASE_URL}/shop/`)
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
    }, [d]);

    return (
        <React.Fragment>
            <SearchShop />
            {
                loading == true ?
                    [...Array(7)].map((e, i) => <ShopThumbnail shop="loading" key={i} />) :
                    error !== false ? error.message :
                    shops.length>0?
                        shops.map((shop) => (
                            <ShopThumbnail
                                shop={shop}
                                style='card'
                                key={shop.id} />
                        )):
                        <SarShaySay {...[lang().shopNotfound]} />
            }
        </React.Fragment>

    );
}
export default ShopArchive;

