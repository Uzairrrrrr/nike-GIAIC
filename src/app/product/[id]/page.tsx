import { useRouter } from "next/router";
import ProductDetail from "@/components/product-detail";
import sanityClient from "@/sanity/sanity.client";

const ProductPage = ({ product }: { product: any }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetail product={product} />;
};

export async function getServerSideProps({ params }: any) {
  const { id } = params;

  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    price,
    description,
    image {
      asset -> {
        url
      }
    }
  }`;

  const product = await sanityClient.fetch(query, { id });

  return {
    props: { product }, // Will be passed to the ProductPage component as props
  };
}

export default ProductPage;
