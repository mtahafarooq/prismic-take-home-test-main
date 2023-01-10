import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Basket as BasketType } from "./types/basket";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

interface BasketProps {
  basket: BasketType;
  checkoutTotal: number;
  removeProductFromBasket: (name: string) => void;
}

const getRows = (basket: BasketType) => {
  const rows = [];
  for (const [name, quantity] of Object.entries(basket)) {
    rows.push({ name, quantity });
  }
  return rows;
};

const Basket: FC<BasketProps> = ({
  basket,
  checkoutTotal,
  removeProductFromBasket,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
              <h1>Basket</h1>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <strong>Product</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Quantity</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Remove</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getRows(basket).map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    removeProductFromBasket(row.name);
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="right" colSpan={2}>
              <strong>Total</strong>
            </TableCell>
            <TableCell align="right">{checkoutTotal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Basket;
