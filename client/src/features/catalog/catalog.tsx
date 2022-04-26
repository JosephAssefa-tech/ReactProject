import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { Product } from "../../app/layout/models/product";
import ProductList from "./ProductList";
import agent from "../../app/layout/api/agent";

export default function Catalog()
{
  const [products,setProduct]=useState<Product[]>([]);
  useEffect(()=>{
agent.Catalog.list().then(products=>setProduct(products));
  
  },[])

    return(
        <>
<ProductList products={products} />

      </>
    )
}
