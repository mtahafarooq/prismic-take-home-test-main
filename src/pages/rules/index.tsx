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
import AddRule from "../../components/rule/add-rule";
import { Product } from "../products/types/product";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

interface RulesProps {
  rules: Rule;
  products: Product;
  removeRule: (name: string) => void;
  addRule: (rule: Rule) => void;
}

const getRows = (rule: Rule) => {
  const rows = [];
  for (const [name, price] of Object.entries(rule)) {
    rows.push({ name, ...price });
  }
  return rows;
};

const Rules: FC<RulesProps> = ({ rules, removeRule, addRule, products }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={4}>
                <h1>Rules</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <strong>Product</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Price</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Offer</strong>
              </TableCell>
              <TableCell align="center">
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
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{`${row.quantity} for ${row.price}`}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      removeRule(row.name);
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddRule addRule={addRule} products={products} />
    </>
  );
};

export default Rules;
