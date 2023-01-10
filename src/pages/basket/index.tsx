import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Basket as BasketType } from "./types/basket";

interface BasketProps {
  basket: BasketType;
  checkoutTotal: number;
}

const getRows = (basket: BasketType) => {
  const rows = [];
  for (const [name, quantity] of Object.entries(basket)) {
    rows.push({ name, quantity });
  }
  return rows;
};

const Basket: FC<BasketProps> = ({ basket, checkoutTotal }) => {
  return (
    <Table sx={{ maxWidth: 400 }} aria-label="spanning table">
      <TableHead>
        <TableRow>
          <TableCell align="center" colSpan={2}>
            <h1>Basket</h1>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <strong>Product</strong>
          </TableCell>
          <TableCell align="right">
            <strong>Qty.</strong>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {getRows(basket).map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">{row.quantity}</TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan={1}>Total</TableCell>
          <TableCell align="right">{checkoutTotal}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Basket;
