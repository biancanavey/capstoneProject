import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './home.js';
import Games from './games.js';
import About from './about';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" component={Homepage} exact/>
      <Route path="/games" component={Games} exact />
      <Route path="/about" component={About} exact />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
