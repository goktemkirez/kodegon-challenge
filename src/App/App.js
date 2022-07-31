import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';

import Main from '../pages/Main/Main';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
