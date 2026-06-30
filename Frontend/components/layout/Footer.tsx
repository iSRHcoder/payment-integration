import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <Container>
        <div className="py-6 text-center text-sm text-slate-500">
          © 2026 MyShop. Built with Next.js + Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
