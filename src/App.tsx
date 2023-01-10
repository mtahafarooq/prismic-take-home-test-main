import Basket from "./pages/basket/containers/basket-container";
import Products from "./pages/products/containers/product-container";
import Rules from "./pages/rules/containers/rules-container";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function App() {
  return (
    <Container>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <Rules />
        </Grid>
        <Grid item xs={4}>
          <Products />
        </Grid>
        <Grid item xs={4}>
          <Basket />
        </Grid>
      </Grid>
    </Container>
  );
}
