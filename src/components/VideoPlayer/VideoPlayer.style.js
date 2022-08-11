import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width:'100%',
    paddingTop: '56.25%',
    position: "relative"
  },
  videoPlayer: {
    position: 'absolute',
    top: 0,
    left :0,
    bottom:0,
    right:0,
    marginTop: 40,
    maxWidth: 875,
    width:'100%',
    height: '100%',
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      width: '100vw',
      marginLeft: '-25px'
    }
  }
}));