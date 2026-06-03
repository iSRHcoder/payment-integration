import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "RazorShop",
  description: "Learning Razorpay Integration",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
