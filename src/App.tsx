import * as React from "react";
import "./App.css";
import Dictionaries from "./presentational/Dictionaries";
import Header from "./presentational/Header";
import Tables from "./presentational/Tables";
import Tests from "./presentational/Tests";
import styled from "./theme/index";

// import { injectGlobal } from "./theme/index"

const Body = styled.div`
  background-color: white;
  display: flex;
`;

interface IAppProps {
  compiler: string;
  framework: string;
}

const App: React.SFC<IAppProps> = () => {
  return (
    <div className="App">
      <div className="MaxWidth">
        <Header />
          <Body>
            <Dictionaries />
            <Tables />
            <Tests />
          </Body>
        <div style={{ borderBottom: "solid", borderWidth: "thin" }} />
      </div>
    </div>
  );
}

export default App;
