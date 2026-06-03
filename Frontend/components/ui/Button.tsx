import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 active:scale-95 cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
