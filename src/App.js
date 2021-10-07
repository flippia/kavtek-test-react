import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-sidebar">
          <Sidebar />
        </div>
        <Switch className="app-cards">
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/contact" >
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
