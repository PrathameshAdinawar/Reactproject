import React from "react";
import { Box } from "@mui/material";
import Sidemap from "./Sidemap";

function Settings(){
    return(
        <Box sx={{ display: 'flex' }}>
        <Sidemap/>
        <h1>Settings</h1>
    </Box>
    )
}

export default Settings