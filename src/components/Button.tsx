interface ButtonProps {
  onClick?: () => void
  text?: string
  type?: 'filled' | 'outlined'
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  text = 'Button',
  type = 'filled'
}) => {
  return <button onClick={onClick}>{text}</button>
}

export default Button
