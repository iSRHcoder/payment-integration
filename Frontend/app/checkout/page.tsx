import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

const CheckoutPage = () => {
  return (
    <section className="py-10">
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
            {
              label: "Checkout",
            },
          ]}
        />

        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>

          <div className="mt-8 space-y-6">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Shipping Address
              </label>

              <textarea
                rows={4}
                placeholder="Enter your address"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <Button label="Pay with Razorpay" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CheckoutPage;
