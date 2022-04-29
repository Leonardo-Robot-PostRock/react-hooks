import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import useInitialState from './hooks/useInitialState';
import "./styles/App.css";

function App() {
  const { darkMode, setDarkMode, bg } = useInitialState();

  return (
    <div className={"App " + bg} >
      <Header darkMode={darkMode} onClick={() => setDarkMode(!darkMode)} />
      <Characters />
    </div>
  );
}

export default App;
