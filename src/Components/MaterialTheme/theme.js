import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    color: {
        color: theme.color = 'black',
    }
}))

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e86e5a',
    } 
  }   
});

