import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './components/categories.mjs';
import Customers from './components/customers.mjs';
import Orders from './components/orders.mjs';
import Products from './components/products.mjs';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
