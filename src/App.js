import logo from './logo.svg';
import './App.css';


const number = 55555;
const singer = {name: 'asif', job: 'singer'}

const singerStyle = {
  color: 'green',
  backgroundColor : 'white'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div id="countries" className="countries">
          <p></p>
          <p></p>
          <p></p>
        </div>

        <div className="container">
          <h3>Hello ! </h3>
        </div>

        <div className="music">
          <p>Number: {2222+ number}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
        </div>

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
        </a>
        <Friend></Friend>
      </header>
      
    </div>
  );


  function Friend(){
    return (
      <div>
        <h3>Name: Hasib</h3>
        <p>dasfdghf</p>
      </div>
    )
    
    
  }
}

export default App;
