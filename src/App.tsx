import * as React from "react";
import Header from "./presentational/Header";

// import { injectGlobal } from "./theme/index"



interface IAppProps {
  compiler: string;
  framework: string;
}

const App: React.SFC<IAppProps> = () => {
    return <Header />;
}

export default App;
