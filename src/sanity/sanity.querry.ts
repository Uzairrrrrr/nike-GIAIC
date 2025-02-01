import sanityClient from "./sanity.client";

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    image {
      asset -> {
        url
      }
    },
    description
  }`;

  try {
    const data = await sanityClient.fetch(query);
    return data.map((product: any) => ({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image.asset.url,
      height: 400,
      width: 400,
      description: product.description,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
