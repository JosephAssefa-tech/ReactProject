import { Container, Paper, Typography } from "@mui/material";

export default function ServerError()
{
    return(
        <Container component={Paper}>
            <Typography variant='h5' gutterBottom>500 Server Error</Typography>
        </Container>
    )
}