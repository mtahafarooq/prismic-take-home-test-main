import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import { Rule } from "./types/rule";

interface RulesProps {
  rules: Rule;
}

const getRows = (rule: Rule) => {
  const rows = [];
  for (const [name, price] of Object.entries(rule)) {
    rows.push({ name, ...price });
  }
  return rows;
};

const Rules: FC<RulesProps> = ({ rules }) => {
  return (
    <TableContainer>
      <h1>Rules</h1>
      <Table sx={{ maxWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Product</strong>
            </TableCell>
            <TableCell>
              <strong>Unit Price</strong>
            </TableCell>
            <TableCell>
              <strong>Special Offer</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getRows(rules).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{`${row.quantity} for ${row.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Rules;
