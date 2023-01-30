import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Table({header, data}) {
  return (
    <TableContainer sx={{width: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '1rem'}} component={Paper}>
      <Table sx={{width: 'auto'}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{borderBottom: '3px solid black'}}>
          {header.map((header_cell) => (
            <TableCell sx={{fontWeight: 'bold'}}>{header_cell}</TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data_row) => (
            <TableRow
              key={data_row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                {data_row.map((data_cell) => (
                <TableCell>{data_cell}</TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}