import logo from './logo.svg';
import './App.css';

export const App =()=> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Formulario de registro
        </a>
      </header>
    </div>
  );
}
