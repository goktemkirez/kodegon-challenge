import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import { contentsJSON } from "../../assets/contentsJSON";

// import { useStyles } from "./Content.style";

import Title from "../Title";
import ProjectCard from "../ProjectCard";

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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', }}
            paddingLeft={{ xs: '20px', lg: '60px' }}
            paddingRight={{ xs: '20px', lg: '60px' }}>
            <Title title='Suspendisse Tempus' />
            <Box sx={{
                width: '100%',
                padding: 0,
                margin: 0,
            }} maxWidth="100%">
                <Grid container spacing={{ xs: 0, lg: '20px' }}
                    direction="row"
                    justifyContent="flex-start"
                    padding={{ xs: 0, lg: 0 }}
                    paddingTop={0}
                    paddingBottom={0}
                    margin={0} >
                    {data.map((data) => (
                        <Grid item xs={12} lg={3} key={data.id} padding={0} margin={0}>
                            <ProjectCard key={data.id}
                                title={data?.title}
                                imageUrl={data?.imageUrl}
                                writer={data?.writer}
                                dates={data?.dates}
                                content={data?.content} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Content;
