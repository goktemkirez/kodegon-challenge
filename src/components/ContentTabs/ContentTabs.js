import React, { useState, useEffect, useLayoutEffect } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Typography, Button, Container } from "@mui/material";

import { useStyles } from "./ContentTabs.style";

import { tabsJSON } from "../../assets/tabsJSON";

import Title from "../Title";
import VideoPlayer from "../VideoPlayer";

const ContentTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState('1');
    const [tabsData, setTabsData] = useState([]);
    const [showMore, setShowMore] = useState(true);

    useLayoutEffect(() => {
        function updateSize() {
            if (window.screen.availWidth < 600) {
                setShowMore(true)
            }
            else {
                setShowMore(false)
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        getTabDatas();
    }, []);

    const getTabDatas = async () => {
        try {
            setTabsData(tabsJSON);
            console.log(tabsJSON);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setShowMore(true);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} paddingLeft={{ xs: '20px', lg: '60px' }}>
                <TabList variant="scrollable" onChange={handleChange}>
                    {tabsData.map((data) => (
                        <Tab key={data.id} label={data?.title} value={data.id.toString()} />
                    ))}
                </TabList>
            </Box>
            {tabsData.map((data) => (
                <TabPanel key={data.id} className={classes.tabPanel} value={data.id.toString()} >
                    <Box paddingLeft={{ xs: '0px', lg: '40px' }}>
                        <Title title={data?.title} />
                        <Typography
                            className={classes.tabContent}
                            variant="body2"
                            paragraph={true}
                            align="left">
                            {showMore && window.screen.availWidth < 600 ? data?.content.substring(0, 250) + "..." : data?.content}
                        </Typography>
                        {showMore ?
                            <Container sx={{ display: 'flex' }} className={classes.btnDiv}>
                                <Button sx={{
                                    borderColor: '#DE0F17',
                                    color: '#000000',
                                    borderRadius: 0,
                                    borderWidth: '2px',
                                    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                                    marginTop: '32px'
                                }}
                                    color='error'
                                    className={classes.readMoreBtn}
                                    variant="outlined"
                                    onClick={() => setShowMore(false)}>
                                    YAZININ DEVAMI +
                                </Button>
                            </Container> : null}
                        <VideoPlayer videoUrl={data?.videoUrl} />
                    </Box>
                </TabPanel>
            ))}
        </TabContext>
    );
};

export default ContentTabs;
