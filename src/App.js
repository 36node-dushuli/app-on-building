import { COPYRIGHT, BEIAN, XUKEZHENG } from "./config";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/building.gif" className="App-logo" alt="logo" />
        <p>
          网站建设中，敬请期待。
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
               {XUKEZHENG}
            </div>
      </header>
    </div>
  );
}

export default App;
