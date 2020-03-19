import React, { FC } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

type SideBarProps = {
    open: boolean,
    onClose(): void
}

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
                </List>
            </Drawer>
        </div>
    );
}

export default SideBar;