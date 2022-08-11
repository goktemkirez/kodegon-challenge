import React, { useState, useEffect } from "react";
import { Box, ImageListItem } from "@mui/material";
import { Masonry } from '@mui/lab'
import useMediaQuery from "@mui/material/useMediaQuery";

import { contentsJSON } from "../../assets/contentsJSON";

import Title from "../Title";
import ProjectCard from "../ProjectCard";

const Content = (props) => {
    const [data, setData] = useState([]);
    const isMobile = useMediaQuery('(max-width:600px)');

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
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Box paddingLeft={{ xs: '20px', lg: '60px' }}
                paddingRight={{ xs: '20px', lg: '60px' }}>
                <Title title='Suspendisse Tempus' />
            </Box>
            <Masonry 
                sx={isMobile ? 
                    { marginLeft: '20px', marginRight: '20px' }
                    : { marginLeft: '60px', marginRight:'60px', marginTop:'7px' }} 
                    columns={{ xs:1, sm:2, md:3, lg:4}} spacing={2}>
                {data.map((item) => (
                    <ImageListItem key={item.id}>
                        <ProjectCard key={item.id}
                            title={item?.title}
                            imageUrl={item?.imageUrl}
                            writer={item?.writer}
                            dates={item?.dates}
                            content={item?.content} />
                    </ImageListItem>
                ))}
            </Masonry>
        </Box>
    );
};

export default Content;
