import * as React from 'react';
import Box from '@mui/material/Box';
import a_photo from './demo-backend/profile/cover.jpg'
import ItemThumbnail from './template/item';
import { Drawer, Hidden, SwipeableDrawer, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import Items from './items';
import CategoryTabs from './template/categorytab';

// နမူနာ api
const shop = {
  name: "Food Shop",
  description: "best place in thw world",
  feature_image: a_photo,
  theme_color: '#630'
}


function App() {
  return (
    <div className="profile" style={{ color: '#fff', backgroundColor: ` ${shop.theme_color}` }}>
      <header
        style={{
          background: `url(${shop.feature_image})`,
          backgroundSize: `cover`
        }}
      >
        <div
          className="info"
          style={{
            color: '#fff',
            background: `linear-gradient(transparent, ${shop.theme_color})`
          }}
        >
          <div className=" container s">
            <h1>{shop.name}&nbsp;<CheckCircleIcon /></h1>
            <p>{shop.description}</p>
          </div>
        </div>
      </header>
        <CategoryTabs/>
        <Items />
      <br/>
    </div>
  );
}

export default App;