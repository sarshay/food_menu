import * as React from 'react';
import Box from '@mui/material/Box';
import a_photo from './demo-backend/profile/cover.jpg'
import ItemThumbnail from './template/item';
import { Drawer, Hidden, SwipeableDrawer, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import Items from './items';
import CategoryTabs from './template/categorytab';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
// နမူနာ api
const shop = {
  name: "Food Shop",
  description: "best place in thw world",
  feature_image: a_photo,
  theme_color: '#530'
}

function shadeColor(color, percent) {

  color = color.replace(/^#/, '')
  if (color.length === 3) color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]

  var R = parseInt(color.substring(0,2),16);
  var G = parseInt(color.substring(2,4),16);
  var B = parseInt(color.substring(4,6),16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R<255)?R:255;  
  G = (G<255)?G:255;  
  B = (B<255)?B:255;  

  var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
  return "#"+RR+GG+BB;
}
const colorShade = (col, amt) => {
  col = col.replace(/^#/, '')
  if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

  let [r, g, b] = col.match(/.{2}/g);

  r = parseInt(r * (175 + amt) / 100);
  g = parseInt(g * (175 + amt) / 100);
  b = parseInt(b * (175 + amt) / 100);

  ([r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt])

  r = Math.max(Math.min(255, r), 0).toString(16)
  g = Math.max(Math.min(255, g), 0).toString(16)
  b = Math.max(Math.min(255, b), 0).toString(16)


  const rr = (r.length < 2 ? '0' : '') + r
  const gg = (g.length < 2 ? '0' : '') + g
  const bb = (b.length < 2 ? '0' : '') + b

  return `#${rr}${gg}${bb}`
}
function adjust(color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    background: {
      default: shop.theme_color,
      paper: shop.theme_color,
    },
    text: {
      primary: '#fff',
      secondary:colorShade(shop.theme_color,80 )
    },
  }
});
function App() {

  return (
    <ThemeProvider theme={theme}>
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
        <CategoryTabs />
        {/* <Box sx={{ width: '100%', color: 'inherint' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box> */}
        <Items />
        <br />
      </div>
    </ThemeProvider>
  );
}

export default App;