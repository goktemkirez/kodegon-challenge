import React, { useState, useEffect } from "react";
import { Box, Grid, Container } from "@mui/material";

import { contentsJSON } from "../../assets/contentsJSON";

// import { useStyles } from "./Content.style";

import ProjectCard from "../ProjectCard/ProjectCard";

const Content = (props) => {
    // const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        try {
            setData(contentsJSON);
        } catch (error) {
            console.log("error", error);
        }
    };

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
                    padding={{ xs: '20px', lg: 0 }}
                    paddingTop={0}
                    paddingBottom={0}
                    margin={0} >
                    {data.map((data) => (
                        <Grid item xs={12} lg={3} key={data.id}>
                            <ProjectCard key={data.id}
                                title={data?.title}
                                imageUrl={data?.imageUrl}
                                writer={data?.writer}
                                dates={data?.dates}
                                content={data?.content} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Content;
