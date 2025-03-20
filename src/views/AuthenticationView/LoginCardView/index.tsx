import { Box, FormControl, TextField, Typography } from "@mui/material";

export default function LoginCardView(){
    return(
        <Box 
            display='flex'
            sx={{
                height:"100%",
                flexDirection:'column',
                justifyContent:'space-between'
            }}
        >
            <Box>
                <Typography variant="h5" fontWeight="900">Login</Typography>

                <TextField
                    sx={{mt:'20px'}}
                    fullWidth
                    label="Email address"
                    variant="standard"
                />

                <FormControl></FormControl>

            </Box>
        </Box>
    )
}