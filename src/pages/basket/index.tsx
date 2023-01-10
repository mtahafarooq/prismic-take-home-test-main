import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Basket as BasketType } from "./types/basket";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
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
    <Table sx={{ maxWidth: 400 }} aria-label="spanning table">
      <TableHead>
        <TableRow>
          <TableCell colSpan={3}>
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
          <TableCell align="right">
            <strong>Remove</strong>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {getRows(basket).map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">{row.quantity}</TableCell>
            <TableCell align="right">
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
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell align="right">{checkoutTotal}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Basket;
