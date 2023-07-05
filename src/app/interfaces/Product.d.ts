export interface Product{
    id:string;
    site_id:string;
    title:string;
    seller_id:number | string;
    category_id?: string;
    official_store_id: number;
    price: number;
    base_price: number;
    thumbnail: string;
    catalog_listing:boolean;
    pictures:{
        id:string;
        url:string;
    };
    seller_address:{
        id:number
    }
}
export interface ResponseProducts{
    site_id:string;
    query:string;
    results: Product[]
}
export interface ResponseDetailDescription{
    plain_text:string;
}