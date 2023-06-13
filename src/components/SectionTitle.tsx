// images
import peak from '@/assets/images/line-mountains-peak.svg'
import horizon from '@/assets/images/line-mountains-horizon.svg'
import Text from '@/components/Text'

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
      className={`flex flex-col justify-end ${bgImageClass} bg-no-repeat bg-top lg:bg-bottom lg:bg-contain relative overflow mb-10`}
    >
      {bgImage && (
        <img
          src={bgImage}
          alt='bgImage'
          className={'invisible max-w-fit min-h-[200px] md:min-h-[275px]'}
        />
      )}
      <div
        className={`flex flex-col items-center justify-center gap-y-3 ${
          bgImage ? 'absolute' : ''
        } w-full px-3`}
      >
        <Text type='section-subtitle'>{subtitle}</Text>
        <Text type='section-title' className={'text-center'}>
          {title}
        </Text>
      </div>
    </div>
  )
}
export default SectionTitle
