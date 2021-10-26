import React from 'react';
import ShopThumbnail from '../template/shop/thumbnail';
import archive from './../demo-backend/shop/archive-shop.json'

export default function ShopArchive(props) {
    // prop အား backend ကိုပို့ပြီး result ရယူရန်
    // result ပုံစံနမူနာ
    const result = archive;
    const shops = archive.shops;
    return (
        <React.Fragment>
        {shops.map((shop) => (
            <ShopThumbnail 
            shop = {shop} 
            style = 'card'
            key={shop.id}/>
        ))}
        </React.Fragment>
    )   
}
