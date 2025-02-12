// import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import { PRODUCTS_QUERY, PRODUCT_SEARCH_QUERY } from "@/sanity/helpers/queries";
import { PRODUCT_BY_SLUG } from "@/sanity/helpers/queries";


export const getAllProducts = async () => {
// const PRODUCT_QUERY = defineQuery(`*[_type == "product"] | order(name asc)`);
    try {
        const products = await sanityFetch({
            query: PRODUCTS_QUERY,
        });
        return products.data || [];

    } catch (error) {
        console.log('All products fetching Error:', error);
        return [];
    }
};

export const getProductBySlug = async (slug:string) => {
    try {
        const product = await sanityFetch({
            query: PRODUCT_BY_SLUG,
            params: { slug },
        });
        return product?.data || null;
    } catch (error) {
        console.log('Product fetching Error:', error);
        return null;
    }
}
// 2 
export const searchProductsByName = async (searchParam: string) => {  
    try {
      const products = await sanityFetch({
        query: PRODUCT_SEARCH_QUERY,
        params: {
          searchParam: `${searchParam}`,
        },
      });
      return products?.data || [];
    } catch (error) {
      console.error("Error fetching products by name:", error);
      return [];
    }
  };
    
    