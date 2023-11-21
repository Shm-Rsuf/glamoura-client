import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const buttonVariants = cva("eq inline-block text-center whitespace-nowrap px-4 py-2 border rounded-md text-lg capitalize disabled:bg-gray disabled:text-black disabled:cursor-default disable:border-gray", {
  variants: {
    variant: {
     primary: "",
     secondary: "…",
     danger: "",
     outline: "",
     },
    size: { 
    auto: "…", 
    full: "…" 
    },
  },
  defaultVariants: {
      variant: "primary",
      size: "full",
    },
  });
  
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{
    isLoading?: boolean;
  }

  const Button:React.FC<ButtonProps> = ({onClick, type, disabled, children, variant, size, isLoading, ...props}) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled || isLoading} {...props} className={cn(isLoading && "flex gap-2.5 items-center", buttonVariants({variant, size}))}>{isLoading && < Loader2 size={20} className="animate-spin"/>}{children}</button>
  )
}

export default Button;