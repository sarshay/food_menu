import * as React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Items from '../view/item';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import data from '../backend/index.json'
import BottomAppBar from '../components/app_bar';
import {colorShade} from '../function/color'


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary:{
      main:colorShade(data.theme_color,50 ),
    },
    background: {
      default: data.theme_color,
      paper: data.theme_color,
    },
    text: {
      primary: '#fff',
      // secondary:colorShade(data.theme_color,50 )
    },
  }
});
function Shop() {

  return (
    <ThemeProvider theme={theme}>
      <div className="profile" style={{ color: '#fff', backgroundColor: ` ${data.theme_color}` }}>
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
              background: `linear-gradient(transparent, ${data.theme_color})`
            }}
          >
            <div className=" container s">
              <h1>{data.name}&nbsp;<CheckCircleIcon /></h1>
              <p>{data.description}</p>
              <ShareSharpIcon />
            </div>
          </div>
        </header>
        {/* <Box sx={{ width: '100%', color: 'inherint' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box> */}
        <Items data={data.items}/>
        <br />
      </div>
      <BottomAppBar/>
    </ThemeProvider>
  );
}

export default Shop;