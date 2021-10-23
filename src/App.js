import { COPYRIGHT, BEIAN, TITLE } from "./config";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/building.gif" className="App-logo" alt="logo" />
        <p>
          {TITLE}
        </p>
        <div className="App-footer">
              Copyright © {COPYRIGHT}
              <br />
              <a className="App-link"
                href="http://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {BEIAN}
              </a>
            </div>
      </header>
    </div>
  );
}

export default App;
