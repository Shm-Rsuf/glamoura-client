import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("…", {
  variants: {
    variant: {
     primary: "…",
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
  
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{}

  const Button:React.FC<ButtonProps> = ({onClick, type, disabled, children, variant, size, ...props}) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} {...props} className={cn("inline-block bg-black text-white text-center whitespace-nowrap px-4 py-2 border border-rose-300 rounded-md text-lg capitalize",buttonVariants({variant, size}))}>{children}</button>
  )
}

export default Button;