import React, { useState, useEffect } from 'react';
import { Divider, IconButton, InputBase, Paper, TextField } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { browserHistory } from 'react-router';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';
import { lang } from './message';

export function SearchShop() {

    let wordFromRoute = useParams().word;

    let history = useHistory();

    const [word, setWord] = useState(wordFromRoute);
    const handleChange = (e) => {
        setWord(e.target.value);
    }
    const goSearch = (e) => {
        e.preventDefault();
        history.push(`/search/${word==undefined?'':word}`);
        console.log(word);
    }
    return (
        <Paper
            className="glass"
            component="form"
            variant="outlined"
            // variant="filled"
            noValidate
            autoComplete="off"
            elevation={8}
            role='search'
            sx={{ zIndex: 1, position: 'sticky', top: 20, borderRadius: '50px', m: 2, p: '2px 10px', display: 'flex', alignItems: 'center' }}
            onSubmit={goSearch}
        >
            <InputBase
                required={true}
                sx={{ ml: 1, flex: 1 }}
                placeholder={lang().searchFoodOrShop}
                inputProps={{ 'aria-label': 'search food or shop' }}
                value={word}
                type="search"
                onChange={handleChange}
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
