import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  tabPanel: {
    textAlign: "left",
    fontFamily: "Roboto",
    marginBottom: '52px',
    ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: 875,
      width: 'calc(100% - 45px)',
      marginBottom: '64px',
    }
  },
  tabContent: {
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto",
  },
  btnDiv:{
    width:'100%',
    display: "flex",
    justifyContent: 'center',
  },
  readMoreBtn: {
    visibility: 'hidden',
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      visibility: 'visible',
      width: 200,
      height: 50,
    }
  }
}));