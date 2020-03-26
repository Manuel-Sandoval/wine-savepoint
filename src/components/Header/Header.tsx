import React, { SFC } from 'react';
import { AppBar, Grid } from '@material-ui/core';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

const links = [
    {ref:'/shop', text:'Shop'},
    {ref:'/cart', text:'Cart'}
];

const Header: SFC = () => {
    return (
        <AppBar className={styles.AppBar} position='static'>
            <Grid container>
                <Grid item xs={12}>
                    <div>
                        <Link to='/'><img src="https://raw.githubusercontent.com/Manuel-Sandoval/wine-ecomm/master/src/assets/images/logo.png" alt="header"/></Link>
                    </div>
                </Grid>
                <Grid item xs={12} className={styles.Links}>
                    {
                        links.map((v, k) => {
                            return <NavLink to={v.ref} 
                                        key={`${k}${v.text}`}
                                        className={styles.Link} 
                                        activeClassName={styles.Active}>
                                            {v.text}
                                    </NavLink>
                        })
                    }
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Header;