import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListSecurityComponent from './components/ListSecurityComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateSecurityComponent from './components/CreateSecurityComponent';


function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch> 
              <Route path = "/" exact component = {ListSecurityComponent}></Route>
              <Route path = "/securities" component = {ListSecurityComponent}></Route>
              <Route path = "/add-security/:id" component = {CreateSecurityComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
