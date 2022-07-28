import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  tabPanel: {
    textAlign: "left",
    fontFamily: "Roboto",
    ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
      width: 875,
    }
  },
}));