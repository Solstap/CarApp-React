import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { UIContext } from './context/UI.context';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function Layout() {
    const { isOpen: open, severity, onClose: handleClose, message } = useContext(UIContext)
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <>
            <header>
                {/* <h1>Cool CARS all the way</h1> */}
                <Header />
            </header>

            <main>
                <Container maxWidth="md">
                    <Outlet />
                </Container>

            </main>
            <Snackbar
                open={open}
                autoHideDuration='6000'
                onClose={handleClose}
                // message={message}
                action={action}
            >
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}
export default Layout;