"use client";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Button from "./ui/Button";
import { Product } from "@/types/products";
import { loadRazorpay } from "@/utils/loadRazorpay";
import { toast } from "sonner";
import axios from "axios";

interface ProductCardProps {
  product: Product;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};

const ProductCard = ({ product }: ProductCardProps) => {
  const handleBuyNow = async () => {
    const loaded = await loadRazorpay();

    if (!loaded) {
      toast.warning("Failed to load payment gateway. Please try again.");
      return;
    }

    let orderData;
    try {
      const createOrderRes = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/create-order`,
        {
          itemId: product.id,
          itemPrice: product.price,
        },
      );
      orderData = createOrderRes.data; // { id, amount, currency, ... }
    } catch (error) {
      toast.error("Failed to create order. Please try again.");
      console.error("Create order error:", error);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
      amount: orderData.amount,
      currency: orderData.currency,
      order_id: orderData.id,
      name: "RazorShop",
      description: product.description,
      image: product.image,

      handler: async (res: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => {
        try {
          const verifyRes = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/verify-payment`,
            {
              order_id: res.razorpay_order_id,
              payment_id: res.razorpay_payment_id,
              signature: res.razorpay_signature,
            },
          );

          if (verifyRes.data.success) {
            toast.success("Payment successfull!");
          } else {
            toast.error("Payment verification failed. Please contact support.");
          }
        } catch (error) {
          toast.error("Something went wrong during verification.");
          console.error("Verify error:", error);
        }
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#4f46e5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          loading="eager"
          sizes="(max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
            {product.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-indigo-600">
            {formatCurrency(product.price)}
          </p>

          <Button
            label="Buy Now"
            onClick={handleBuyNow}
            className="flex items-center gap-2"
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
