import Axios from 'axios';
import React, { Component, useState } from 'react';

export default function Tast() {
    

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const axios = require('axios').default;
    axios.get(`http://127.0.0.1:8000/api/shop/`, {
            params: {
                ID:'1243'
            }
        })
            .then(function (response) {
                setResult (response.data);
            })
            .catch(function (error) {
                return (error);
            })
            .then(function () {
                // always executed
            });
            
    return <>
        {result ? `result` : `(noresult)`},
        {loading ? "loading" : "(noloading)"},
        {error ? "error" : "(no error)"}
    </>;
}
