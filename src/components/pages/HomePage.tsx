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
    // <GenericTemplate title="トップページ">
    //   <>トップページ内容</>
    // </GenericTemplate>
    <>
      <Header />
      <Menu />

      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ width: '20%' }}><TreeView01 /></td>
            <td style={{ width: '80%', position: 'relative', top: -28 }}><Demo /></td>
          </tr>
          {/* <div style={{display: 'inline-block', width: '20%', backgroundColor: 'red'}}><TreeView02/></div> */}
          {/* <div style={{display: 'inline-block', width: '60%', backgroundColor: 'green'}}>bbb</div> */}
        </tbody>
      </table>
      {/* <div style={{display: 'inline-block', width: '20%',backgroundColor: 'red'}}><TreeView02/></div> */}
      {/* <div style={{width: '20%', display: 'inline-block'}}><TreeView01/></div> */}
      {/* <div style={{display: 'inline-block', backgroundColor: 'red'}}>aaa</div> */}
      {/* <div style={{width: '60%', display: 'inline-block'}}><Demo/></div> */}

      {/* <GenericTemplate title="トップページ">test</GenericTemplate> */}
      {/* <Demo/> */}

      {/* <TreeView02/> */}
      {/* <Demo/> */}

      <Footer />
    </>
  );
};

export default HomePage;