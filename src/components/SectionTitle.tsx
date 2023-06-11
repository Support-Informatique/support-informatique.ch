// images
import bgImage from '@/assets/images/line-mountains-peak.svg'

// interfaces
interface SectionTitleProps {
  title: string
  subtitle: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div
      className={
        'flex flex-col justify-end bg-line-mountains-peak bg-no-repeat  bg-center relative'
      }
    >
      <img src={bgImage} alt='bgImage' className={'invisible max-w-fit'} />
      <div
        className={
          'flex flex-col items-center justify-center gap-y-3 absolute w-full'
        }
      >
        <span className={'text-primary text-xl uppercase font-black'}>
          {subtitle}
        </span>
        <p className={'text-darkText text-6xl font-black text-center'}>
          {title}
        </p>
      </div>
    </div>
  )
}
export default SectionTitle
