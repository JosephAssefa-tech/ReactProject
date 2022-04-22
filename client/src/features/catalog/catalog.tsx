import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { Product } from "../../app/layout/models/product";
import ProductList from "./ProductList";

export default function Catalog()
{
  const [products,setProduct]=useState<Product[]>([]);
  useEffect(()=>{
    fetch('https://localhost:44341/api/Products')
    .then(response=>
      response.json())
    .then(data=>setProduct(data))
  },[])

    return(
        <>
<ProductList products={products} />

      </>
    )
}
