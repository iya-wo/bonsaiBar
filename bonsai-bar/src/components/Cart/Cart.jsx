import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">Your bag is empty.
            <Link to="/" className={classes.link}>Start adding items!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => {
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                })}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">Subtotal: { cart.subtotal.formatted_with_symbol }</Typography>
                    <div>
                        <Button className={classes.emptyButtons} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Nothing here to see! 👀</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout 🛒 </Button>
                    </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">"Yeah, I'm in my bag, but I'm in his too."</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
