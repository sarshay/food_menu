import { ThemeProvider } from '@mui/material';
import React from 'react';
import ShopArchive from '../controller/shop_archive';
import BottomAppBar from '../components/app_bar';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#fff',
      },
      secondary:{
        main:'#333',
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

function Home(props) {
    return (
        <ThemeProvider theme={theme}>
            <div
                style={{
                    minHeight: `calc(100vh - 60px)`
                }}>
                <ShopArchive/>
            </div>
            <BottomAppBar />
        </ThemeProvider>
    );
}

export default Home;