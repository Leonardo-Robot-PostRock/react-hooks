import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import useInitialState from './hooks/useInitialState';
import "./styles/App.css";

function App() {
  const { darkMode, setDarkMode, bg } = useInitialState();

  return (
    <div className={"App " + bg} >
      <h1>Hola mundo</h1>
      <Header darkMode={darkMode} onClick={() => setDarkMode(!darkMode)} />
      <Characters />
    </div>
  );
}

export default App;
