import { ThemeProvider } from '@mui/material';
import React from 'react';
import ShopArchive from '../controller/shop_archive';
import BottomAppBar from '../components/app_bar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { useParams } from 'react-router';
import TheQrReader from '../components/app_bar/the-qr-reader';

import { styled } from '@mui/material/styles';
const color = "#000000"
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#3337',
    },
    background: {
      default: color,
      paper: '#33333366',
    },
    text: {
      primary: '#fff',
      // secondary:colorShade(data.theme_color,50 )
    },
  }
});

function HomePage(props) {
  
  document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
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
        <ShopArchive
          {...filter}
        />
        <TheQrReader />
      </div>
    </ThemeProvider>
  );
}

export default HomePage;

