// import logo from './logo.svg';
// import './App.css';
// import Cal from './Cal';
// import Arr from './Arr';
import Input from './Input';
import Radiobuttons from './Radiobuttons';
import Info from './Info';
import Imagin from './Imagin';
import Btvn from './Btvn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <Cal /> */}
        {/* <Arr /> */}

        <Imagin />
        <Btvn />
        <Input />
        <Radiobuttons task="Clean up bedroom" />
        <Radiobuttons task="Buy some milk" />
        <Radiobuttons task="Jogging" />
        <Radiobuttons task="Learn React" />
        <Radiobuttons task="Doing exercises" />
        <Info />

      </header>
    </div>
  );
}

export default App;
