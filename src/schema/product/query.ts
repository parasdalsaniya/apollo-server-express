/* eslint-disable @typescript-eslint/no-explicit-any */
// product/query.js
export const ProductQuery = {
    product: (parent: any, args: any) => {
          // whatever
          console.log({ parent, args});
    },
    products: (parent: any, args: any) => {
         // whatever
         console.log({ parent, args});

    }
}
