import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Body from './Body';
import Blog from './Blog';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/portfolio'>
            <Header active='portfolio'/>
            <Portfolio/>
          </Route>
          <Route path='/about'>
            <Header active='about'/>
            <About/>
          </Route>
          <Route path='/blog'>
            <Header active='blog'/>
            <Blog/>
          </Route>
          <Route exact path='/'>
            <Header active='home'/>
            <Body/>
          </Route>
          <Route>
            <Header/>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
