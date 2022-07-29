import React from "react";
import { Typography, Box } from "@mui/material";

const Title = (props) => {
    const { title } = props;

    return (
        <Box
            sx={{
                textAlign: 'left',
                marginTop: '40px',
                marginBottom: '30px',
            }}>
            <Typography variant='h2' sx={{
                fontWeight: 'bold',
                borderBottom: 3,
                borderBottomColor: '#DE0F17',
                display: 'inline',
            }} fontSize={{ xs: '24px', lg: '36px' }}>
                {title}
            </Typography>
        </Box>

    );
};

export default Title;
