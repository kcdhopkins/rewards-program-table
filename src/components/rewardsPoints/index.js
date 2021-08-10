import React from 'react';
import { Table, TableBody, TableContainer, Paper, } from '@material-ui/core';
import TableHeader from './TableHeader'
import Row from './Row'

const RewardsPointTable = ({rewardsPointData}) => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHeader />
        <TableBody>
          {rewardsPointData.map((row, index) => (
            <Row key={`header-${index}`} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default RewardsPointTable