import React from "react";

import { useStyles } from "./VideoPlayer.style";

const VideoPlayer = (props) => {
    const { videoUrl } = props;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <iframe className={classes.videoPlayer} height="auto" src={videoUrl}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                title='video'>
            </iframe>
        </div>
    );
};

export default VideoPlayer;
