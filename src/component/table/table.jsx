import styled  from "styled-components";

const Table = ({ children }) => {
  return <TableContainer>{children}</TableContainer>;
};

export default Table;

const TableContainer= styled.table`
  margin: 40px;
  /* border: 1px solid gray; */
  border-collapse: collapse;

` 