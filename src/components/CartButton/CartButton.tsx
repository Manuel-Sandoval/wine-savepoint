import React, { SFC } from 'react';

import { Link } from 'react-router-dom';

const CartButton: SFC = () => {
    
    return (
        <Link to='/cart'>
            To Cart
        </Link>
    )

}

export default CartButton;