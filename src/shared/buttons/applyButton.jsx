import React from "react";
import { Button, Typography } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';


const ApplyButton = () => {
    return (
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
           
            <Button variant="contained" color="primary" 
                style={{ backgroundColor: '#13ebc3', width: '100%', borderRadius: '10px' }}>
                
                <BoltIcon style={{ fontSize: '2rem' }} />
                
                <Typography style={{ color: 'black', fontWeight: 'bold', textTransform: 'none' }}>
                    Easy Apply
                </Typography>
            </Button>
        </div>
    )
}

export default ApplyButton;
