import React, { useState, useEffect } from 'react';
import { Box, TextField, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { defaultThemeColor } from './defaultThemeColor';
import SarshayBar from '../components/app_bar';
import CssBaseline from '@mui/material/CssBaseline';



import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { lang } from '../components/message';
import { LocationOn } from '@mui/icons-material';

const theme = createTheme(defaultThemeColor);


function Cart(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };




    const [cCart, setCCart] = React.useState(JSON.parse(localStorage.getItem('cart')) || []);

    return (
        <ThemeProvider theme={theme}>

            <CssBaseline />
            <div className="page">
                {cCart.map((item, i) => (
                    <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} key={i}>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Box sx={{ width: '100%', flexShrink: 1 }}>
                                <Typography>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ fontSize: 'small', fontWeight: 100, color: 'text.secondary' }}>
                                    <LocationOn sx={{ fontSize: 'small' }} /> {item.shop_name}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography sx={{ fontSize: 'small', textAlign: 'right', fontWeight: 100, color: 'text.secondary' }}>
                                    {`${item.price.toLocaleString('en-US')} x ${item.n}`}
                                </Typography>
                                <Typography sx={{ width: '100px', flexShrink: 1, textAlign: 'right' }}>
                                    {`${(item.price * item.n).toLocaleString('en-US')} ${lang().kyat}`}
                                </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: 'small', color: 'text.secondary' }}>
                                {`${item.key}`}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
                                {`${item.price} x ${item.n} = ${item.price * item.n}`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}

                <SarshayBar />
            </div>

        </ThemeProvider>
    );
}

export default Cart;
