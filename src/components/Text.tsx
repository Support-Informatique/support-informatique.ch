interface TextProps {
  type?:
    | 'primary-text'
    | 'section-title'
    | 'section-subtitle'
    | 'card-title'
    | 'light-text'
  children: React.ReactNode
  className?: string
}

const Text: React.FC<TextProps> = ({
  type = 'primary-text',
  children,
  className = ''
}) => {
  const textSize = {
    'primary-text': 'text-primary text-md md:text-lg lg:text-xl',
    'section-title':
      'text-darkText text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black',
    'section-subtitle':
      'text-primary text-sm sm:text-base md:text-md lg:text-lg xl:text-xl uppercase font-black',
    'card-title': 'text-darkText font-bold text-xl sm:text-2xl',
    'light-text': 'text-primary opacity-75 text-md md:text-lg '
  }

  return <p className={`${textSize[type]} ${className}`}>{children}</p>
}

export default Text
