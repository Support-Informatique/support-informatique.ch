// images
import peak from '@/assets/images/line-mountains-peak.svg'
import horizon from '@/assets/images/line-mountains-horizon.svg'

// interfaces
interface SectionTitleProps {
  title: string
  subtitle: string
  background?: 'peak' | 'horizon'
}

const getBackground = (background: string | undefined) => {
  if (background === 'peak') {
    return peak
  } else if (background === 'horizon') {
    return horizon
  }
  return null
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  background
}) => {
  const bgImage = getBackground(background)
  const bgImageClass = background ? `bg-line-mountains-${background}` : ''

  return (
    <div
      className={`flex flex-col justify-end ${bgImageClass} bg-no-repeat bg-bottom bg-contain relative overflow-hidden`}
    >
      {bgImage && (
        <img
          src={bgImage}
          alt='bgImage'
          className={'invisible max-w-fit min-h-[275px]'}
        />
      )}
      <div
        className={
          'flex flex-col items-center justify-center gap-y-3 absolute w-full'
        }
      >
        <span
          className={
            'text-primary sm:text-md md:text-lg lg:text-xl uppercase font-black'
          }
        >
          {subtitle}
        </span>
        <p
          className={
            'text-darkText sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center'
          }
        >
          {title}
        </p>
      </div>
    </div>
  )
}
export default SectionTitle
