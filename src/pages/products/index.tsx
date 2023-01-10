import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import { Product } from "./types/product";

interface ProductsProps {
  products: Product;
  addProductToBasket: (name: string) => void;
}

const getRows = (product: Product) => {
  const rows = [];
  for (const [name, unitPrice] of Object.entries(product)) {
    rows.push({ name, ...unitPrice });
  }
  return rows;
};

const Products: FC<ProductsProps> = ({ products, addProductToBasket }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
              <h1>Products</h1>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <strong>Name</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Unit Price</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Add to Basket</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getRows(products).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.unitPrice}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addProductToBasket(row.name)}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
