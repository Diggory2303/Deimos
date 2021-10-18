import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {NoMatch} from './pages/NoMatch';
import {Layout} from './components/Layout';

function App() {
  return (
    <div>
     <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
