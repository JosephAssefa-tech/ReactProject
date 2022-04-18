import { Avatar, Button, ListItemAvatar, ListItemText } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import { Product } from "../../app/layout/models/product";

interface Props{
    product:Product;
}
export default function ProductCard({product}:Props)
{
    return (
        <ListItem key={product.id}>

        <ListItemAvatar>
          <Avatar src={product.pictureUrl}/>
          
          </ListItemAvatar>
          <ListItemText>
            {product.name} - {product.price}
          </ListItemText>
      </ListItem>
    )
}