import { ThemeProvider } from '@mui/material';
import React from 'react';
import ShopArchive from '../controller/shop_archive';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { useParams } from 'react-router';
import TheQrReader from '../components/app_bar/the-qr-reader';
import SarshayBar from '../components/app_bar';

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
        <div style={{height:50,position:'fixed',top:0,width:'100vw',zIndex:1,background:'linear-gradient(#000,transparent'}}/>
        <ShopArchive
          {...filter}
        />
        <SarshayBar/>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;

