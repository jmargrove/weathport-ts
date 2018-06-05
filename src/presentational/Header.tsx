import * as React from "react";
import styled from "./../theme/index";
// import {theme} from "./../theme/index";
import Logo from "./Logo";

// description: the web-apps header displaying the title "wealthport" and logo




const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  border-color: black;
  border-bottom: solid;
  border-width: thin;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  color: black;
`;

const Header: React.SFC<{}> = () => {
    return (
      <HeaderContainer>
        <HeaderTitle> Wealthport </HeaderTitle>
        <Logo />
      </HeaderContainer>
    );
}

export default Header;
