import React, { FC } from 'react';
import { 
    Drawer,
    ListItemIcon, 
    List, 
    ListItem, 
    IconButton, 
    Divider, 
    Typography
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Queue';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.scss'

type SideBarProps = {
    open: boolean,
    onClose(): void
}

const drawerList = [
    {icon: <HomeIcon/>, text: 'Home', link: '/'},
    {icon: <ShopIcon/>, text:'Shop', link: '/shop'}
];

const SideBar: FC<SideBarProps> = (props) => {
    return (
        <div>
            <Drawer variant='persistent' open={props.open}>
                <List>
                    <ListItem>
                        <IconButton onClick={props.onClose}>
                            <CloseIcon/>
                        </IconButton>
                    </ListItem>
                    <Divider />
                    {
                        drawerList.map((v, k) => {
                            return (
                                <Link to={v.link} key={k} className={styles.Links}>
                                    <ListItem button>
                                        <ListItemIcon>{v.icon}</ListItemIcon>
                                        <Typography>{v.text}</Typography>
                                    </ListItem>
                                </Link>
                            )
                        })
                    }
                </List>
            </Drawer>
        </div>
    );
}

export default SideBar;