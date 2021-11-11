import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import data from '../backend/index.json'
import ShopBar from '../components/app_bar';
import { colorShade } from '../function/color'
import Shop from '../view/shop';
import axios from 'axios';
import { Loading } from '../components/message';
import { useParams } from "react-router-dom";
import TheQrReader from '../components/app_bar/the-qr-reader';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
/// shop page မှာ controller မသုံး Colorပါလို့



function ShopPage() {
  let id = useParams().shop_id;
  const [shop, setShop] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [color, setColor] = useState('#000');

  useEffect(() => {
    console.log(process.env);

    async function fetchData() {
      setLoading(true);
      setError(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      await axios.get(`${process.env.REACT_APP_BASE_URL}/shop/${id}`)
        .then((res) => {
          setShop(res.data);
          setColor(res.data.color)
          setLoading(false);
          document.querySelector('meta[name="theme-color"]').setAttribute("content", res.data.color);
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
        paper: color + 'aa',
      },
      text: {
        primary: '#fff',
        // secondary:colorShade(color,50 )
      },
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper component={Box} color="primary" style={{ background: color }} className="page">
        {
          loading == true ?
            // <Shop data="loading" /> 
            <Loading /> :
            error !== false ? error.message :
              // <Loading/> 
              <Shop data={shop} />
        }
      </Paper>
      <TheQrReader />
    </ThemeProvider>
  );
}

export default ShopPage;

