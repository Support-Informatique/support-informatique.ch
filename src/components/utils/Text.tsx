interface TextProps {
  type?:
    | 'primary-text'
    | 'section-title'
    | 'section-subtitle'
    | 'card-title'
    | 'lightblue-text'
    | 'lightgray-text'
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
      'text-darkText text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold',
    'section-subtitle':
      'text-primary text-sm sm:text-base md:text-md lg:text-lg xl:text-xl uppercase font-extrabold',
    'card-title': 'text-darkText font-bold text-xl sm:text-2xl',
    'lightblue-text': 'text-primary opacity-75 text-md md:text-lg',
    'lightgray-text': 'text-lightText text-md sm:text-lg'
  }

  if (type === 'section-title') {
    return <h1 className={`${textSize[type]} ${className}`}>{children}</h1>
  }

  if (type === 'section-subtitle') {
    return <h2 className={`${textSize[type]} ${className}`}>{children}</h2>
  }

  return <p className={`${textSize[type]} ${className}`}>{children}</p>
}

export default Text
