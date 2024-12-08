import ProductDetail from "@/components/product-detail";

const product = {
  id: "1",
  name: "Nike Air Force 1 PLT.AF.ORM",
  price: 8695,
  description:
    'Turn style up to trend with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction includes unique layering and exposed foam accents. Use the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add elevated appeal, while the unfinished showing rich mixture of materials and aged midstole aesthetic give this release an artisan finish.',
  image: "/shoes-1.png?height=600&width=600",
};

export default function ProductPage() {
  return <ProductDetail product={product} />;
}
