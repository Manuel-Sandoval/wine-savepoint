import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from '../../components/SideBar/SideBar';
import CartButton from '../../components/CartButton/CartButton';

import './NavBar.scss';

interface INavBarState {
    open: boolean;
}

class NavBar extends Component<{}, INavBarState> {

    constructor(props:{}) {
        super(props);

        this.state = {
            open: false
        }
    }

    public render() {

        /*
        let side = null;

        if (this.state.open) {
            side = (<SideBar open={this.state.open} onClose={this.closeDrawerHandler}/>)
        }
        */

        return (
            <div>
                <AppBar position='fixed' className='NavBar'>
                    <Toolbar>
                        <IconButton onClick={this.openDrawerHandler}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='h6' className='title'>Wine Zone</Typography>
                        <CartButton />
                    </Toolbar>
                </AppBar> 
                <SideBar open={this.state.open} onClose={this.closeDrawerHandler}/>
            </div>
        )
    }

    private toggleDrawerHandler = (): void => {
        let drawerState: boolean = this.state.open;
        drawerState = !drawerState;
        this.setState({open: drawerState})
    }

    private openDrawerHandler = (): void => {
        this.setState({open: true});
    }

    private closeDrawerHandler = (): void => {
        this.setState({open: false});
    }

}

export default NavBar;