import { Box } from "@mui/material";
import Sidemap from "./Sidemap";
import Nav from "./Nav";

function Home(){
    return(
        <>
        <Nav/>
        <Box sx={{ display: 'flex' }}>
        <Sidemap/>
        <h1>Home</h1>
    </Box>
    </>
    )
}

export default Home;