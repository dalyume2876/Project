import { AppBar, Box, Button, Container, FormControl, IconButton, InputAdornment, OutlinedInput, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";

export default function NavigationBar(){

    //      HOOK        //
    const [content, setContent] = useState<string>('');

    //      Event Handler       //
    const onSearchKeyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key !== 'Enter') return;
        onSearchHandler();
    }

    const onSearchPressHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        onSearchHandler();
    }

    const onSearchHandler = () => {
        if(!content.trim()){
            alert('Please insert your Search keywords');
        }
    }

    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" variant="outlined" sx={{backgroundColor:'#f2f3f4'}}>
                    <Toolbar>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                mr:2,
                                display: {xs: 'flex', md:'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                textDecorationL:'none',
                                color: '#212f3d'
                            }}
                        >
                            DREAM BOARD CONTENTS
                        </Typography>

                        <Box sx={{display: "flex"}}>
                            <FormControl variant="outlined" sx={{mr:'10px'}}>
                                <OutlinedInput
                                    size="small"
                                    type="text"
                                    placeholder="Search..."
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton edge="end" onClick={onSearchPressHandler}>
                                                <SearchIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    onChange={(event) => setContent(event.target.value)}
                                    onKeyPress={(event) => onSearchKeyPressHandler(event)}
                                />
                            </FormControl>
                        </Box>

                        {/* Log off */}
                        <Button size="large" variant="text" sx={{borderColor:'#000000', color:'#000000', fontWeight:700}}>
                            Login
                        </Button>
                        <Typography sx={{fontSize:'10px', fontWeight: 500, pl:'5px', color:'#212f3d'}}>are you new?</Typography>
                        <Button size="large" variant="text" sx={{borderColor:'#000000', color:'#000000', fontWeight:700}}>
                            Sign in
                        </Button>
                    </Toolbar>
            </AppBar>
        </Box>
    )
}