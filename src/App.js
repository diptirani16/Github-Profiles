
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm">
        <Search />
        {/* <Details /> */}
      </Container>
    </div>
  );
}

export default App;
