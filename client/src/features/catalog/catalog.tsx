import { Avatar, Button, ListItemAvatar, ListItemText } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Product } from "../../app/layout/models/product";

interface Props{
  products:Product[];
  addProduct:()=>void;
} 
export default function Catalog({products,addProduct}:Props)
{
    return(
        <>

   <List>
        {
      products.map(product=>(
        <ListItem key={product.id}>

          <ListItemAvatar>
            <Avatar src={product.pictureUrl}/>
            
            </ListItemAvatar>
            <ListItemText>
              {product.name} - {product.price}
            </ListItemText>
        </ListItem>
      ))
      }
      <Button variant='contained' onClick={addProduct}>Add Product</Button>
      </List>
      </>
    )
}
