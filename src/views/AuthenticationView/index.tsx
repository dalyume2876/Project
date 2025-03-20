import { Box, Card, Grid, Typography } from "@mui/material";
import LoginCardView from "./LoginCardView";

export default function AuthenticationView(){
    return(
        <Box>
            <Grid container spacing={2}>
                <Grid item lg={7} sm={12}>
                    <Box sx={{
                        display:'flex',
                        height:'100%',
                        flexDirection: 'column',
                        justifyContent:'center',
                        alignItems:'center',
                        mt: '20px'
                    }}>
                        <Typography variant="h3" >Welcome to</Typography>
                        <Typography variant="h3">Dream Board Contents</Typography>
                    </Box>
                </Grid>
                <Grid item lg={4} sm={12}>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Card sx={{height:'500px', mt:'50px', mb:'80px', p:'50px 150px 30px 150px'}}>
                            <LoginCardView/>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}