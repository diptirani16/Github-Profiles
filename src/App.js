
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { Container } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/system';
import { useState } from 'react';

function App() {
  const [toggleDark, settoggleDark] = useState(false);

  const myTheme = createTheme({
    palette:{
      type: toggleDark ? 'dark' : 'light',
    }
});
 
  return (
    <div className="App">
      {/* <ThemeProvider theme={myTheme}> */}
        <Header toggleDark={toggleDark} settoggleDark={settoggleDark} />
        <Container maxWidth="sm">
          <Search />
        </Container>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
