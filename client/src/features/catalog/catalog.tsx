import { Product } from "../../app/layout/models/product";

export default function Catalog(props:any)
{
    return(
        <>

   <ul>
        {
      props.products.map((product:any)=>(
        <li key={product.id}>{product.name} - {product.price}</li>
      ))
      }
      <button onClick={props.AddProduct}>Add Product</button>
      </ul>
      </>
    )
}