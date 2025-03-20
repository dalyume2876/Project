import { alpha, AppBar, Box, Button, colors, Container, FormControl, IconButton, InputAdornment, Menu, MenuItem, MenuProps, OutlinedInput, styled, Switch, Toolbar, Tooltip, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Padding } from "@mui/icons-material";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal:'right'
        }}
        {...props}
    />
))(({theme}) => ({
    '& .MuiPater-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'rgb(55, 65, 81)',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            Padding: '4px 0',
        },
        '& .MuiMenuIcon-root': {
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
        '& .no-click-effect': {
            '&:active':{
                backgroundColor: 'transparent',
            },
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[300]
        }),
    },
}));

const label = {inputProps: {'aria-label': 'Swich demo'}};

export default function NavigationBar(){

    //      HOOK        //
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl);
    const navigator = useNavigate();
    const path = useLocation();

    const [content, setContent] = useState<string>('');

    //      Event Handler       //
    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

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
                                margin:'0px auto',
                                flexGrow: 1,
                                display: {xs: 'flex', md:'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                textDecorationL:'none',
                                color: '#212f3d',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}
                            onClick={() => navigator('/')}
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
                        <Button size="large" variant="text" sx={{borderColor:'#000000', color:'#000000', fontWeight:700}} onClick={() => navigator('/auth')}>
                            Login
                        </Button>

                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open settings">
                                <IconButton 
                                    id='open-settings'
                                    aria-controls={open ? 'open-settings' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleOpenMenu}
                                >
                                    <MoreVertIcon/>
                                </IconButton>
                            </Tooltip>
                            <StyledMenu 
                                id='cusomized-menu'
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleCloseMenu}
                            >
                                <MenuItem disableRipple className="no-click-effect">
                                    Dark Theme
                                    <Switch {...label}/>
                                </MenuItem>
                            </StyledMenu>
                        </Box>
                    </Toolbar>
            </AppBar>
        </Box>
    )
}