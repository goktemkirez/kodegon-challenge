import React from "react";
import { Box, Grid, Container } from "@mui/material";

// import { useStyles } from "./Content.style";

import ProjectCard from "../ProjectCard/ProjectCard";

const Content = (props) => {
    // const classes = useStyles();

    return (
        <Box>
            <Container sx={{
                width: '100%',
                padding: 0,
                margin: 0,
            }} maxWidth="100%">
                <Grid container spacing={{ xs: 0, lg: '20px' }}
                    direction="row"
                    justifyContent="flex-start"
                    padding={{ xs: '20px', lg: 0}}
                    paddingTop={0}
                    paddingBottom={0}
                    margin={0} >
                    <Grid item xs={12} lg={3}>
                        <ProjectCard />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ProjectCard />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ProjectCard />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ProjectCard />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ProjectCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Content;
