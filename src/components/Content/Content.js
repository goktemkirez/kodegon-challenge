import React, { useState, useEffect } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
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
            <ImageList variant="masonry"
                sx={isMobile ? 
                    { display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px' }
                    : { padding: '60px', paddingTop:'7px' }} cols={4} gap={20}>
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
            </ImageList>
        </Box>
    );
};

export default Content;
