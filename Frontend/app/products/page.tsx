import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/Card";
import Container from "@/components/ui/Container";
import { products } from "@/data/products";

const ProductsPage = () => {
  return (
    <main className="py-4 sm:py-4">
      <Container>
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Products",
              href: "/products",
            },
          ]}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default ProductsPage;
