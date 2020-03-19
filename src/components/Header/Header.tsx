import React, { SFC } from 'react';
import { AppBar, Grid } from '@material-ui/core';
import styles from './Header.module.scss';

const Header: SFC = () => {
    return (
        <AppBar className={styles.AppBar} position='static'>
            <Grid container>
                <Grid item xs={12}>
                    <div>
                        <img src="https://raw.githubusercontent.com/Manuel-Sandoval/wine-ecomm/master/src/assets/images/logo.png" alt="header"/>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Header;