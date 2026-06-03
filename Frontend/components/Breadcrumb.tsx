"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const pathname = usePathname();
  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-600">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isActive = pathname === item.href;

        return (
          <div key={item.label} className="flex items-center gap-2">
            {item.href && !isActive ? (
              <Link
                href={item.href}
                className="underline font-bold text-indigo-400 cursor-pointer"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`font-medium ${
                  isActive ? "text-slate-900 cursor-default" : "text-slate-600"
                }`}
              >
                {item.label}
              </span>
            )}

            {!isLast && <ChevronRight size={16} />}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
