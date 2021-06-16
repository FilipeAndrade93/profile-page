import logo from './logo.svg';
import './App.css';
import SidebarComponent from './Components/SidebarComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <SidebarComponent/>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
