import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "components/pages/HomePage";
import Demo from "containers/templates/Demo";
import NotFound from "components/pages/NotFound";
import orgCodes from "data/org-codes";


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/test" component={TreeView01} exact /> */}
        <Route path="/" component={HomePage} exact />
        <Route path="/:orgCode/members" component={Demo} />
        <Route path="/products" component={ProductPage} exact />
        {/* <Route path="/test" component={Demo} exact /> */}
        {/* <Route path="/:orgCode/members" element={<Members />} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
