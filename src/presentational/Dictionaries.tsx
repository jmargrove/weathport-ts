import * as React from "react";
import styled from "./../theme/index";
// import DictionaryComponent from "../components/DictionaryComponent";
// import AddDictionary from "./AddDictionary";

// description: display left pannel with all the dictionary items and input etc

const DictionaryContainer = styled.div`
  width: 280px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

const DictionaryList = styled.div`
  height: 400px;
  width: 240px;
  background-color: white;
  margin: 20px;
  border: solid;
  border-width: thin;
  overflow-y: auto;
`;

const DictionaryTitle = styled.div`
  height: 60px;
  width: 240px;
  margin: 20px;
  margin-bottom: 0;
  background-color: #5299d3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid;
  border-top: solid;
  border-width: thin;
  border-color: black;
`;

const Dictionaries: React.SFC = () => {
  return (
    <DictionaryContainer>
      <DictionaryTitle>Avalible Dictionaries </DictionaryTitle>
      <DictionaryList>
        {/* <DictionaryComponent /> */}
      </DictionaryList>
      {/* <AddDictionary /> */}
    </DictionaryContainer>
  );
};

export default Dictionaries;
