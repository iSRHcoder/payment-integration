import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/ui/Container";

const HomePage = () => {
  return (
    <section>
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
          <div className="mb-10 max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-500 sm:text-5xl">
              Modern E-Commerce UI
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {" "}
              To learn Razorpay Payment Integration
            </p>
          </div>
        </Container>
      </main>
    </section>
  );
};

export default HomePage;
