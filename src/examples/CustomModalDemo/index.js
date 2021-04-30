/*****Import use for example purpose only */
import React from "react";
import './index.css'
import {Button,Grid,Typography, Container, TextField, Box} from '@material-ui/core';
/*****Import use for example purpose only */
import { CustomModal } from "../../lib";

const CustomModalDemo = () => {
    const [openModal1, setOpenModalOne] = React.useState(false);
    const [openModal2, setOpenModalTwo] = React.useState(false);
    const [openModal3, setOpenModalThree] = React.useState(false);
    const [openModal4, setOpenModalFour] = React.useState(false);
     /***Button  handler for opening the modal ****/
    const openModalHandlerOne = () => setOpenModalOne(true)
    const openModalHandlerTwo = () => setOpenModalTwo(true)
    const openModalHandlerThree = () => setOpenModalThree(true)
    const openModalHandlerFour= () => setOpenModalFour(true)
    /***Success handler for Modal to close and perfom some action  ****/
    const handleSuccessOne = () => setOpenModalOne(false);
    const handleSuccessTwo = () => setOpenModalTwo(false);
    const handleSuccessThree = () => setOpenModalThree(false);
    const handleSuccessFour = () => setOpenModalFour(false);
    /***Close handler for Modal to close ****/
    const handleCloseOne = () => setOpenModalOne(false);
    const handleCloseTwo = () => setOpenModalTwo(false);
    const handleCloseThree = () => setOpenModalThree(false);
    const handleCloseFour = () => setOpenModalFour(false);


  return (
    <Container maxWidth="md">
      <Box component="span" m={3}>
       <Grid container direction="row" justify="space-between" alignItems="flex-start">
    
    {/* first usecase */}
    <Button variant="outlined" color="primary" onClick={openModalHandlerOne}>
        Extra Small Modal
    </Button>
    <CustomModal
     isOpen={openModal1}
     size="xs"
     handleSuccess={handleSuccessOne} 
     handleClose={handleCloseOne}
     title="Are you sure your want to exit?"
     buttonClasses= "buttonCss">
    </CustomModal>


    {/* second usecase */}
    <Button variant="outlined" color="primary" onClick={openModalHandlerTwo}>
        Small Size Modal
    </Button>
    <CustomModal
     isOpen={openModal2}
     size="sm"
     handleSuccess={handleSuccessTwo} 
     handleClose={handleCloseTwo}
     title="Success!!">
         User has been created successfully!!
    </CustomModal>

    {/* Third usecase */}
    <Button variant="outlined" color="primary" onClick={openModalHandlerThree}>
            Medium Size Modal with Form
        </Button>
        <CustomModal
        isOpen={openModal3}
        size="md"
        handleSuccess={handleSuccessThree} 
        handleClose={handleCloseThree}
        title="Subscribe!!">
             <p>To subscribe to this website, please enter your email address here. We will send updates
            occasionally.</p>
            <form>
            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" fullWidth/>
            </form>
    </CustomModal>
    {/* Fourth usecase */}
    <Button variant="outlined" color="primary" onClick={openModalHandlerFour}>
        Large size Modal with HTML
    </Button>
    <CustomModal
     isOpen={openModal4}
     size="lg"
     handleSuccess={handleSuccessFour} 
     handleClose={handleCloseFour}
     title="Success!!">

        <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
    </CustomModal>
    </Grid>
    </Box>
    {/* <div margin="50px">
      <iframe src="https://stackblitz.com/edit/react-nrfif2" height="700px" width="100%"></iframe>
    </div> */}
    </Container>

    
  )
}

export default CustomModalDemo;