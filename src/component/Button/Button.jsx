import "./Button.scss";

const Button = ({title, className = "", onClick, ...props}) => {
  return (
    <button className={`button ${className}`} onClick={onClick} {...props}>{title}</button>
  )
}

export default Button;