import React, {useContext} from 'react';
import {CartContext} from './CartContext';

const Cart = (props) => {
const [cart, setCart] = useContext(CartContext);
return(
<div>{cart.length}</div>
)
}

export default Cart;