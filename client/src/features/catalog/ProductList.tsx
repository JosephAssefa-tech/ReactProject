import { Avatar, Button, ListItemAvatar, ListItemText } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Product } from "../../app/layout/models/product";
import ProductCard from "./ProductCard";

interface Props{
    products:Product[]
}

export default function ProductList({products}:Props)
{

    
    
    return (
        <List>
        {
      products.map(product=>(
          <ProductCard   product={product} />
  
      ))
      } 
   
      </List>
)

}