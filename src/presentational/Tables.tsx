import * as React from "react";
import styled from "./../theme/index";
// import TableComponent from "./../components/TableComponent.js";
// import DictionaryNameComponent from "./../components/DictionaryNameComponent";

// description: displays the centeral pannel components, the "Table"

const ViewContentContainer = styled.div`
  width: 540px;
  height: 100%;
`;

const AddDictionaryContainer = styled.div`
  height: 60px;
  width: 500px;
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

const TableContainer = styled.div`
  display: flex;
  width: 500px;
  background-color: white;
  margin: 20px;
`;

const Tables: React.SFC = () => {
  return (
    <ViewContentContainer>
      <AddDictionaryContainer>
        {/* <DictionaryNameComponent /> */}
      </AddDictionaryContainer>
      <TableContainer>
        {/* <TableComponent /> */}
      </TableContainer>
    </ViewContentContainer>
  );
}

export default Tables;
