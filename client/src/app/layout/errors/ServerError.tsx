import { Container, Paper, Typography } from "@mui/material";

export default function ServerError()
{
    return(
        <Container component={Paper}>
            <Typography variant='h3' gutterBottom>Server Error</Typography>
        </Container>
    )
}