import React from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"]

const Sidebar = () => {
    return (
        <Drawer
            anchor='left'
            open={true}
            onClose={() => { }}
        >
            <Box sx={{ width: "250px" }}>
                <Box sx={{ padding: "5px 10px" }}>
                    <Typography variant='h4'>menú</Typography>
                </Box>
                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <MenuOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
            <Divider />
        </Drawer>
    )
}

export default Sidebar