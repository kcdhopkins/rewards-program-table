import { makeStyles, TableCell, TableRow } from '@material-ui/core';
import React from 'react'
import moment from 'moment'
const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });

const Row = (props)=>{
    const { row } = props;
    const classes = useRowStyles();
    
    return (
      <>
        <TableRow className={classes.root}>
          <TableCell/>
          <TableCell component="th" scope="row">
            {row.fullName}
          </TableCell>
          <TableCell align="right">{moment(row.dateCreated).format("MMMM Do YYYY")}</TableCell>
          <TableCell align="right">{`$${row.transactionAmount}`}</TableCell>
          <TableCell align="right">{row.point1Total}</TableCell>
          <TableCell align="right">{row.point2Total}</TableCell>
          <TableCell align="right">{row.rewardPointsTotal}</TableCell>
        </TableRow>
      </>
    );
  }

export default Row