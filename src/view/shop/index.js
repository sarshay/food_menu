import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Items from '../item';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import { IconButton } from "@mui/material";
import { Map, Phone } from "@mui/icons-material";
import ShopBar from "../../components/app_bar";



export default function Shop(d) {
  const data = d.data;
  const color = data.color;
  // const color = "#900";
  return (
    <div className="profile">
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
            background: `linear-gradient(transparent, ${color})`
          }}
        >
          <div className=" container s">
            <h1>{data.name}&nbsp;<CheckCircleIcon /></h1>
            <p>{data.description}</p>
          </div>
        </div>
      </header>
      <Items data={data.items} />
      <ShopBar {...data}/>
    </div>
  )
}