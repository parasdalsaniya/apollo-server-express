export const ProductTypes = `
    type Product {
      id: ID
      name: String
      price: Float
      desc: String
    }
    extend type Query {
      product: Product
      products: [Product]
    }
    input ProductCreateDataInput {
      name: String
    }
    input ProductUpdateDataInput {
      name: String
    }
    input ProductUpdateWhereInput {
      name: String
    }
    extend type Mutation {
      productCreate(data: ProductCreateDataInput!): Product
      productUpdate(data: ProductUpdateDataInput!, where: ProductUpdateWhereInput!): Product 
    }
`