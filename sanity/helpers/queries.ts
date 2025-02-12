import { defineQuery } from "next-sanity";

export const PRODUCTS_QUERY = defineQuery(
    // `*[_type == 'product']{
    //  _type,
    // name,
    // _id,
    // slug,
    //  price,
    // oldPrice,
    // discount,
    // image,
    // description,
    //  _createdAt,   
    // _updatedAt,  
    // _rev ,
    // }`

    `*[_type == 'product' && _createdAt != null]{
        _type,
        name,
        _id,
        slug,
        price,
        oldPrice,
        discount,
        image,
        description,
        _createdAt,
        _updatedAt,
        _rev
      }`
);

export const PRODUCT_BY_SLUG = defineQuery(
    `*[_type == 'product' && slug.current == $slug] | order(name asc)[0]`
);

export const PRODUCT_SEARCH_QUERY = defineQuery(
    `*[_type == 'product' && name match $searchParam] | order(name asc)`
);





// console.log(PRODUCTS_QUERY);
// console.log( NEXT_PRODUCT);
