import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
    const [mobileMoreAnchorE1, setMobileMoreAnchorE1] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorE1);

    const handleMobileMenuClose = () => setMobileMoreAnchorE1(null);

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorE1} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
        id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} 
        open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
                        Bonsai Bar
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button} >
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    </div> 
                    )}  
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </>
    );
};    

export default PrimarySearchAppBar;
