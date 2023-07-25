import React from 'react';
import ProductForm from './components/ProductFrom';
import ProductUpdateFrom from './components/ProductUpdateForm';
import ContactMessages from './components/ContactMessages';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import OrderList from './components/OrderList'; 
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container"> {/* Add container class */}
          <Switch>
            <Route exact path="/" component={ProductUpdateFrom} />
            <Route path="/productfrom" component={ProductForm} />
            <Route path="/productupdate" component={ProductUpdateFrom} />
            <Route path="/message" component={ContactMessages} />
            <Route path="/orderlist" component={OrderList} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
