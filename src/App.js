import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <img src={logo}  className="mb-3 nav-logo App-logo" alt="logo" />
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </nav>
      </header>

      <div className="main">
        <h1>Fun facts about React</h1>
          <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ol>
      </div>

      <footer className="footer">
            <small>@2021 Blaire development. All rights reserved.</small>
        </footer>
    </div>
  );
}

export default App;
