import Link from "next/link";
import Container from "../ui/Container";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-indigo-600"
          >
            MyShop
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>

            {/* <Link href="/checkout" className="hover:text-indigo-600">
              Checkout
            </Link> */}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
