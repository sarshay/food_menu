import * as React from 'react';
import Box from '@mui/material/Box';
import a_photo from './demo-backend/profile/cover.jpg'
import ItemThumbnail from './template/item';
import { Drawer } from '@mui/material';

// နမူနာ api
const shop = { 
  name: "Food Shop",
  description: "best place in thw world",
  feature_image: a_photo,
  theme_color: '#900'
}


function App() {
  return (
    <div className="profile" style={{ color: '#fff', backgroundColor: ` ${shop.theme_color}` }}>
      <header
        style={{
          background: `url(${shop.feature_image})`
        }}
      >
        <div
          className="info"
          style={{
            color: '#fff',
            background: `linear-gradient(transparent, ${shop.theme_color})`
          }}
        >
          <h1>{shop.name}</h1>
          <p>{shop.description}</p>
        </div>
      </header>
      <div className="_mxy">
        <nav>nav</nav>
        <Items />
      </div>
    </div>
  );
}

export default App;

function Items() {
  const [state, setState] = React.useState({
    item_id: null,
    isopen: false
  });

  const toggleDrawer = (item_id, isopen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({
      item_id: item_id,
      isopen: isopen
    })
  };

  const item_detail = (item_id) => (
    <Box
      role="presentation"
      onKeyDown={toggleDrawer(item_id, false)}
    >
      {item_id}
    </Box>
  );

  return (
      <React.Fragment className="_my">
        {/* loop ရန် အစ*/}
        {['ဝက်သား', 'ကြက်သား', 'ဆိတ်သား'].map((item) => (
        <div key={item} onClick={toggleDrawer(item, true)}>
          <ItemThumbnail item={item} />
        </div>
        ))}
        {/* loop ရန် အဆုံး*/}

        <Drawer
          anchor='bottom'
          open={state.isopen}
          onClose={toggleDrawer(state.item_id, false)}
        >
          {item_detail(state.item_id)}
        </Drawer>
      </React.Fragment>
  );
}
