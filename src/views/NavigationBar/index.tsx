import { AppBar, Box, Button, Container, FormControl, IconButton, InputAdornment, OutlinedInput, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function NavigationBar(){

    //      HOOK        //
    const [content ,setContent] = useState<string>('');

    //      Event Handler       //
    const onSearchKeyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key !== 'Enter') return;
        onSearchHandler();
    }

    const onSearchHandler = () => {
        if(!content.trim){
            alert('Please Enter your Search term')
        }
        else
            alert('You searched ' + content)
        
    }

    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" variant="outlined">
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
                                textDecorationL:'none'
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
                                            <IconButton edge="end">
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
                        <Typography sx={{fontSize:'10px', fontWeight: 500, pl:'5px'}}>are you new?</Typography>
                        <Button size="large" variant="text" sx={{borderColor:'#000000', color:'#000000', fontWeight:700}}>
                            Sign in
                        </Button>
                    </Toolbar>
            </AppBar>
        </Box>
    )
}