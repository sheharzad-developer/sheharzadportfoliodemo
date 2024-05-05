import React, {useState} from 'react'
import { AppBar, Drawer, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CloseOutlined } from '@mui/icons-material';

function NavMain() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(!open)
    }
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon onClick={handleOpen} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer open={open} onClose={handleClose}
                PaperProps={{
                    sx: { width: "100%", bgcolor: '#e2e2e2' },
                }}
            // now you can give icon here 
            >
                Testinggg
                <IconButton>
                    <CloseOutlined onClick={handleClose} />
                </IconButton>
            </Drawer>
        </>
    )
}

export default NavMain