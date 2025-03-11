import { Box, Typography } from "@mui/material";

export default function Footer() {
    return(
        <Box sx={{p:'40px 120px 50px 120px', backgroundColor:'#373737'}}>
            <Box sx={{ display:'flex', justifyContent:'space-between'}}>
                <Box>
                    <Typography sx={{fontSize:'20px', fontWeight:400, color:'#ffffff'}}>Dream Board Contents</Typography>
                </Box>

                <Box>
                    <Typography component='span' sx={{fontSize:"12px", fontWeight:400, color:'#ffffff'}}>dalyume2876@gmail.com</Typography>
                    {/* Icons */}
                </Box>
            </Box>
            <Typography sx={{pt:'20px'}}>Copyright &copy to Dalyume2876. All Rights Reserved. </Typography>
        </Box>
    )
}