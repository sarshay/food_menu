import { TextField, ThemeProvider } from '@mui/material';
import React from 'react';
import ShopArchive from '../controller/shop_archive';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { useParams } from 'react-router';
import TheQrReader from '../components/app_bar/the-qr-reader';
import SarshayBar from '../components/app_bar';
import { defaultThemeColor } from './defaultThemeColor';

const theme = createTheme(defaultThemeColor);

function HomePage(props) {
  let word = useParams().word;
  let filterbyName = {
    filter: "name",//location(lat-long),town,name
    value: word,
    params: {
      limit: 10,
      offset: 0
    }
  }
  var filter = word ? filterbyName : ''
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="page">
        <div style={{ height: 50, position: 'fixed', top: 0, width: '100vw', zIndex: 1, background: 'linear-gradient(#000,transparent' }} />
        <ShopArchive
          {...filter}
        />
        <SarshayBar />
      </div>
    </ThemeProvider>
  );
}

export default HomePage;

