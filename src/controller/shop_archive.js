import React, { useState, useEffect } from 'react';
import ShopThumbnail from '../view/shop/thumbnail';
import axios from 'axios';
import { Divider, IconButton, InputBase, Paper, TextField } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { browserHistory } from 'react-router';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';

function ShopArchive(d) {

    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    var path = d.filter == "name" && d.value !== '' ? `search/${d.value}` : ''
    var params = d.params
    useEffect(() => {
        console.log(process.env);
        async function fetchData() {
            setLoading(true);
            setError(false);
            window.scrollTo(0, 0);
            await axios.get(`${process.env.REACT_APP_BASE_URL}/shop/${path}`,
                { params: params }
            )
                // await axios.get(`${process.env.REACT_APP_BASE_URL}/shop/`)
                .then((res) => {
                    setShops(res.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                    console.log(error);
                });
        }
        fetchData();
    }, [d]);

    return (
        <React.Fragment>
            <SearchShop />
            {
                loading == true ?
                    [...Array(7)].map((e, i) => <ShopThumbnail shop="loading" key={i} />) :
                    error !== false ? error.message :
                        shops.map((shop) => (
                            <ShopThumbnail
                                shop={shop}
                                style='card'
                                key={shop.id} />
                        ))
            }
        </React.Fragment>

    );
}
export default ShopArchive;


function SearchShop() {

    let wordFromRoute = useParams().word;

    let history = useHistory();

    const [word, setWord] = useState(wordFromRoute);
    const handleChange = (e) => {
        setWord(e.target.value);
    }
    const goSearch = (e) => {
        e.preventDefault();
        history.push(`/search/${word}`);
        console.log(word);
    }
    return (
        <Paper
            component="form"

            variant="filled"
            noValidate
            autoComplete="off"
            elevation={8}

            sx={{ zIndex: 1, position: 'sticky', top: 20, borderRadius: '50px', m: 2, p: '2px 10px', display: 'flex', alignItems: 'center' }}
            onSubmit={goSearch}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Food or Shops"
                inputProps={{ 'aria-label': 'search food or shop' }}
                value={word}
                onChange={handleChange}
                required
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <MapIcon />
            </IconButton>
        </Paper>
    )
}
