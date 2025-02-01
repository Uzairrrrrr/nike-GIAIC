export const ProductSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "category", title: "Category", type: "string" },
    { name: "price", title: "Price", type: "number" },
    { name: 'stock', type: 'number', title: 'Stock' },
    { name: "image", title: "Image", type: "image" },
    { name: "description", title: "Description", type: "text" },
  ],
};