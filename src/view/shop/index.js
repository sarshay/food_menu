import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ItemsMenu from '../item';
import {ShopBar} from "../../components/app_bar";



export default function Shop(prop) {
  
  const localData = JSON.parse(localStorage.getItem('shop'));
  const data = localData ? localData : prop;

  // const color = "#900";
  return (
      <header
        style={{
          background: `url(${data.feature_image})`
        }}
      >
        <div
          className="info"
          style={{
            color: '#fff',
            paddingTop: '200px',
            background: `linear-gradient(transparent, ${ data.color})`
          }}
        >
          <div className=" container s">
            <h1>{data.name}&nbsp;<CheckCircleIcon /></h1>
            <p>{data.description}</p>
          </div>
        </div>
      </header>
  )
}