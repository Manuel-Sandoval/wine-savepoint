import React, {SFC} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Cart from '../../containers/Cart/Cart';

const Routes: SFC = () => {
    return (
        <Switch>
            <Route path='/cart' component={Cart}/>
            <Route path='/' component={Home} exact/>
        </Switch>
    );
}

export default Routes;