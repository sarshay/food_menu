import { ThemeProvider } from '@mui/material';
import React from 'react';
import ShopArchive from '../controller/shop_archive';
import BottomAppBar from '../components/app_bar';
import { createTheme } from '@mui/material/styles';
import { useParams } from 'react-router';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#333',
    },
    background: {
      default: '#000',
      paper: '#333',
    },
    text: {
      primary: '#fff',
      // secondary:colorShade(data.theme_color,50 )
    },
  }
});

function HomePage(props) {
  let word = useParams().word;
  let filterbyName = {
    filter:"name",//location(lat-long),town,name
    value:word,
    params: {
      limit: 10,
      offset: 0
    }
  }
  var filter = word?filterbyName:''
  return (
      <ThemeProvider theme={theme}>
        <div className="page">
          <ShopArchive
          {...filter}
          />
          <BottomAppBar />
        </div>
      </ThemeProvider>
    );
}

export default HomePage;