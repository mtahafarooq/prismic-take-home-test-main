import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import { Product } from "./types/product";

interface ProductsProps {
  products: Product;
}

const getRows = (product: Product) => {
  const rows = [];
  for (const [name, unitPrice] of Object.entries(product)) {
    rows.push({ name, ...unitPrice });
  }
  return rows;
};

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <TableContainer>
      <h1>Products</h1>
      <Table sx={{ maxWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Unit Price</strong>
            </TableCell>
            <TableCell>
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
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.unitPrice}</TableCell>
              <TableCell>
                <Button variant="outlined" href="#outlined-buttons">
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
