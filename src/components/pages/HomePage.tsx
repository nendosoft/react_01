import React from "react";
import Header from "../templates/Header";
import Menu from "../templates/Menu";
// import {TreeView01} from "components/templates/TreeView01";
import TreeView01 from "containers/templates/TreeView01";
import { TreeView02 } from "../templates/TreeView02";
// import GenericTemplate from "../templates/GenericTemplate";
import Demo from "containers/templates/Demo";
import Footer from "../templates/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <TreeView01 />
      <Footer />
    </>
  );
};

export default HomePage;