import { SanityClient } from "@sanity/client";
let sanityQuery= (query, params)=> SanityClient.fetch(query,params);

export const getFeaturedRestaurants=()=>{
   return sanityQuery(`
   *[_type== 'featured']{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
    ...
      },
        type->{
        name
        }
      }
    }
   `)
}

export const getCategories=()=>{
   return sanityQuery(`
   *[_type== 'categories']
   `)
}
export const getFeaturedRestaurantById=id=>{
   return sanityQuery(`
   *[_type== 'featured' && _id== '$id]{
      ...,
      restaurants[]->{
         ...,
         dishes[]->{
            type->{ name  }
         }
      }
   }[0]
   `, {id})
}