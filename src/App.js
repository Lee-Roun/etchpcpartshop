import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NoMatch } from './pages/NoMatch';
import { Detail } from './pages/Details';
import { Login } from './pages/Login';
import { ProductList } from './pages/ProductList';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/shop" component={ProductList} />
              <Route path="/detail" component={Detail} />
              <Route path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
