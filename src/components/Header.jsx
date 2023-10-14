import * as React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import ErrorBoundary from './debug/ErrorBoundary';


function DrawerAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <MobileNav
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
            />
            <DesktopNav handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ p: 3 }}>
                <ErrorBoundary>
                    <Toolbar />
                </ErrorBoundary>
            </Box>
        </Box>
    );
}


export default DrawerAppBar;
