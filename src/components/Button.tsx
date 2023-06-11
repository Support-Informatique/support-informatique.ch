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
  const customClass =
    type === 'filled'
      ? 'text-white bg-primary'
      : 'text-primary border-primary border-2 bg-background'

  return (
    <button
      className={`${customClass} drop-shadow-button rounded-[10px] text-base md:text-xl w-fit min-w-[300px] font-black py-4 px-5 tracking-widest`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
