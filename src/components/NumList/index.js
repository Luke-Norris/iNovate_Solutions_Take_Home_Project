import React from 'react';
import { List, ListItem, ListItemText } from "@mui/material";

const NumList = ({ items }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' , justifyContent:"center"}}>
        <List component="nav" aria-label="main mailbox folders" style={{justifyContent:"center"}}>
        <ListItem>
            <ListItemText primary={`[${items.join(', ')}]`} />
        </ListItem>
        </List>
    </div>
  );
};

export default NumList;