import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { Rule } from "./types/rule";

interface RulesProps {
  rules: Rule;
  removeRule: (name: string) => void;
}

const getRows = (rule: Rule) => {
  const rows = [];
  for (const [name, price] of Object.entries(rule)) {
    rows.push({ name, ...price });
  }
  return rows;
};

const Rules: FC<RulesProps> = ({ rules, removeRule }) => {
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
            <TableCell>
              <strong>Remove</strong>
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
              <IconButton
                aria-label="delete"
                onClick={() => {
                  removeRule(row.name);
                }}
              >
                <ClearIcon />
              </IconButton>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Rules;
