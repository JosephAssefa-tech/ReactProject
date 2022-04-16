import { Product } from "../../app/layout/models/product";

interface Props{
  products:Product[];
  addProduct:()=>void;
} 
export default function Catalog({products,addProduct}:Props)
{
    return(
        <>

   <ul>
        {
      products.map(product=>(
        <li key={product.id}>{product.name} - {product.price}</li>
      ))
      }
      <button onClick={addProduct}>Add Product</button>
      </ul>
      </>
    )
}