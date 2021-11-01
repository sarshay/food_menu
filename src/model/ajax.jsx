import Axios from 'axios';
import React, { Component, useState } from 'react';

export default function Tast() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    return <>
        {console.log(abc('4'))}
        {result ? "result" : "(noresult)"},
        {loading ? "loading" : "(noloading)"},
        {error ? "error" : "(no error)"}
    </>;
}

const axios = require('axios').default;

function abc(id) {
    axios.get(`http://127.0.0.1:8000/api/shop/${id}`, {
        params: {
            ID: {id}
        }
    })
        .then(function (response) {
            return(response.data);
        })
        .catch(function (error) {
            return(error);
        })
        .then(function () {
            // always executed
        });
}