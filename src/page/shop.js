import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import data from '../backend/index.json'
import BottomAppBar from '../components/app_bar';
import { colorShade } from '../function/color'
import Shop from '../view/shop';
import axios from 'axios';
import { Loading } from '../components/httpResponse';

/// shop page မှာ controller မသုံး Colorပါလို့



function ShopPage(id) {
  const [shop, setShop] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [color,setColor] = useState('#666');

  useEffect(() => {
    console.log(process.env);
    async function fetchData() {
      setLoading(true);
      setError(false);
      window.scrollTo(0, 0);
      // await axios.get(`shop/search/${prams.search}`)
      await axios.get(`${process.env.REACT_APP_BASE_URL}/shop/15`)
        .then((res) => {
          setShop(res.data);
          
          setColor(res.data.color)
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
          console.log(error);
        });
    }
    fetchData();
  }, [id]);


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: colorShade(color, 50),
    },
    background: {
      default: color,
      paper: color,
    },
    text: {
      primary: '#fff',
      // secondary:colorShade(color,50 )
    },
  }
});
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      {
        loading == true ?
          // <Shop data="loading" /> 
          <Loading/> :
          error !== false ? error.message :
            // <Loading/> 
            <Shop data={shop} />
      }
      <BottomAppBar />
    </ThemeProvider>
    </React.Fragment>
  );
}

export default ShopPage;

