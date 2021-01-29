import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigate, Route, Routes, useLocation } from "react-router-dom"; // npm install react-router@next react-router-dom@next history

import ProductPage from "./components/pages/ProductPage";
import HomePage from "components/pages/HomePage";
// import Demo from "containers/templates/Demo";
import NotFound from "components/pages/NotFound";

const App: React.FC = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" component={HomePage} exact />
    //     {/* <Route path="/:orgCode/members" component={Demo} /> */}
    //     <Route path="/products" component={ProductPage} exact />
    //     <Route component={NotFound} />
    //     {/* <Route component={HomePage} /> */}
    //   </Switch>
    // </Router>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      {/* <Route path="*" element={<Navigate to="/" replace />} />; */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
