// components
import type { IconType } from 'react-icons/lib'

// functions
import { onEnter } from '@/utils/accessibility'

// interfaces
interface ButtonProps {
  onClick?: () => void
  text?: string
  type?: 'filled' | 'outlined' | 'accent'
  icon?: IconType
  size?: 'sm' | 'md'
  className?: string
}

// functions
const getColorClass = (type: string) => {
  switch (type) {
    case 'outlined':
      return 'text-primary border-primary border-2 bg-background'
    case 'accent':
      return 'text-white bg-secondary'
    case 'filled':
    default:
      return 'text-white bg-primary'
  }
}

const getSizeClass = (size: string) => {
  switch (size) {
    case 'sm':
      return 'text-sm min-w-[150px] py-3 rounded-[6px] font-bold'
    case 'md':
    default:
      return 'text-base md:text-xl min-w-[250px] py-4 hover:rounded-[20px]  rounded-[10px] font-extrabold'
  }
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  text = 'Button',
  type = 'filled',
  icon = null,
  size = 'md',
  className = ''
}) => {
  const colorClass = getColorClass(type)
  const sizeClass = getSizeClass(size)
  return (
    <button
      className={`${colorClass} ${sizeClass} ${className} z-10 drop-shadow-button w-fit px-5 tracking-widest flex flex-row justify-center items-center gap-2 transition-all duration-500`}
      onClick={onClick}
      onKeyDown={onEnter}
    >
      {icon && <span className='text-xl'>{icon({})}</span>}
      {text}
    </button>
  )
}

export default Button
