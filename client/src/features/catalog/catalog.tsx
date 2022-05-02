import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/layout/models/product";
import ProductList from "./ProductList";
import agent from "../../app/layout/api/agent";

export default function Catalog()
{
  const [products,setProduct]=useState<Product[]>([]);
  const[loading,setLoading]=useState(true);
  
  useEffect(()=>{
agent.Catalog.list().then(products=>setProduct(products))
.catch(error=>console.log(error))
.finally(()=>setLoading(false))
  
  },[])
  if(loading) return <LoadingComponent message='loading products'/>

    return(
        <>
<ProductList products={products} />

      </>
    )
}
