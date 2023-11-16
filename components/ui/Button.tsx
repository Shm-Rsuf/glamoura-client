interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
const Button:React.FC<ButtonProps> = ({onClick, type, disabled, children, ...props}) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} {...props}>{children}</button>
  )
}

export default Button;