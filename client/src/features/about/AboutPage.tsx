import { Button, ButtonGroup, Container, Typography } from "@mui/material";

import agent from "../../app/layout/api/agent";

export default function AboutPage()
{
    return(
       <Container>
           <Typography gutterBottom variant='h2'>Errors for testing purpose</Typography>
           <ButtonGroup fullWidth>
           <Button variant='contained' onClick={()=>agent.TestError.getValidationError().catch(error=>console.log(error))}>Toast Notification</Button>
               <Button variant='contained' onClick={()=>agent.TestError.get400Error().catch(error=>console.log(error))}>Test 400 Error</Button>
               <Button variant='contained' onClick={()=>agent.TestError.get401Error().catch(error=>console.log(error))}>Test 401 Error</Button>
               <Button variant='contained' onClick={()=>agent.TestError.get404Error().catch(error=>console.log(error))}>Test 404 Error</Button>
               <Button variant='contained' onClick={()=>agent.TestError.get500Error().catch(error=>console.log(error))}>Test 500 Error</Button>
               <Button variant='contained' onClick={()=>agent.TestError.getValidationError().catch(error=>console.log(error))}>validation Error</Button>
           </ButtonGroup>

        </Container>
    )
}