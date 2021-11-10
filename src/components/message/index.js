import React from 'react';
import { Box } from "@mui/system"
import lan from './lang_arakan.json'


export const lang = (id) => {
    return lan;
}

export function Loading() {
    return <SarShaySay {...[lang().loading, lang().waitAMinute]} />
}


export function SarShaySay(p) {
    return (
        <Box sx={{ p: 2 }} style={{textAlign:'center' ,minHeight: `20vh` }}>
            <h2>{p[0]}</h2>
            <p>{p[1]}</p>
        </Box>
    )
}