import React, { useState, FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Rule as RuleType } from "../../../pages/rules/types/rule";
import { Product } from "../../../pages/products/types/product";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface RuleProps {
  products: Product;
  addRule: (rule: RuleType) => void;
}

const Rule: FC<RuleProps> = ({ products, addRule }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });

  const getProductsList = (products: Product) => {
    const productsList = [];

    for (const [name] of Object.entries(products)) {
      productsList.push({ label: name, value: name });
    }
    return productsList;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleRuleAdd = () => {
    let newRule: RuleType = {
      [inputValue.name]: {
        price: inputValue.price,
        quantity: inputValue.quantity,
      },
    };
    addRule(newRule);
    handleClose();
    setInputValue({
      name: "",
      quantity: 0,
      price: 0,
    });
  };

  const isAddButtonDisabled = () => {
    return (
      inputValue.name.length === 0 ||
      inputValue.price === 0 ||
      inputValue.quantity === 0
    );
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{ mt: 3 }}
      >
        Add Rule
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            select
            label="Product"
            defaultValue="A"
            helperText="Please select Product"
            size="small"
            name="name"
            onChange={handleChange}
            value={inputValue.name}
            sx={{ mr: 3 }}
          >
            {getProductsList(products).map(
              (product: { label: string; value: string }) => (
                <MenuItem key={product.value} value={product.value}>
                  {product.label}
                </MenuItem>
              )
            )}
          </TextField>
          <TextField
            helperText="Please enter quantity"
            label="Quantity"
            size="small"
            type="number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={handleChange}
            name="quantity"
            value={inputValue.quantity}
            sx={{ mr: 3 }}
          />
          <TextField
            helperText="Please enter price"
            label="Price"
            size="small"
            type="number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            name="price"
            onChange={handleChange}
            value={inputValue.price}
            sx={{ mr: 3 }}
          />
          <Button
            variant="contained"
            onClick={handleRuleAdd}
            disabled={isAddButtonDisabled()}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Rule;
