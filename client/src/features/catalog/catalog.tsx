import { Button } from "@mui/material";
import { Product } from "../../app/layout/models/product";
import ProductList from "./ProductList";

interface Props{
  products:Product[];
  addProduct:()=>void;//becuase it has no return type
} 
export default function Catalog({products,addProduct}:Props)
{
    return(
        <>
<ProductList products={products} />
<Button variant='contained' onClick={addProduct} >Add Product </Button>
      </>
    )
}
