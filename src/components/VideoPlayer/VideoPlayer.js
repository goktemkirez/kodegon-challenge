import React from "react";

import { useStyles } from "./VideoPlayer.style";

const VideoPlayer = (props) => {
    const { videoUrl } = props;
    const classes = useStyles();

    return (
        <iframe className={classes.videoPlayer} height="auto" src={videoUrl}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            title='video'>
        </iframe>
    );
};

export default VideoPlayer;
