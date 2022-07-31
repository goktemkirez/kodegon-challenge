import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  videoPlayer: {
    marginTop: 40,
    width: 875,
    height: 500,
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      height: 200,
      width: '100vw',
      position: 'relative',
      marginLeft: '-25px'
    }
  }
}));