export interface Product{
    id: number,
    name: string,
    description: string,
    price: number,
    pictureUrl: string,
    type?: string,
    brand: string,
    quantityInStock?: number
}
export interface Catalog{
    id:number;
    name:string;
    
}