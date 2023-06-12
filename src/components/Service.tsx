// images
import layoutIcon from '@/assets/images/icon-layout.svg'
import codeIcon from '@/assets/images/icon-code.svg'
import cloudIcon from '@/assets/images/icon-cloud.svg'
import helpIcon from '@/assets/images/icon-help.svg'
import swissIcon from '@/assets/images/icon-swiss.png'

// type
type Icon = 'layout' | 'code' | 'cloud' | 'help'

// interfaces
interface ServiceProps {
  icon: Icon
  title: string
  description: string
  swissFlag?: boolean
}

// functions
const getIcon = (icon: Icon) => {
  switch (icon) {
    case 'layout':
      return layoutIcon
    case 'code':
      return codeIcon
    case 'cloud':
      return cloudIcon
    case 'help':
      return helpIcon
    default:
      return layoutIcon
  }
}

const Service: React.FC<ServiceProps> = ({
  icon,
  title,
  description,
  swissFlag = false
}) => {
  const iconImg = getIcon(icon)

  return (
    <div className='flex flex-col border-[1px] border-black border-opacity-20 w-4/12 rounded-lg gap-3 p-5'>
      <img
        src={iconImg}
        alt='layoutIcon'
        className='w-8 h-8 p-2 rounded-md bg-secondary'
      />
      <div className='flex flex-row gap-3 items-center'>
        <p className='text-darkText font-bold text-2xl'>{title}</p>
        {swissFlag && (
          <img
            src={swissIcon}
            alt='swissFlag'
            className='w-5 h-5 bg-secondary rounded-[5px]'
          />
        )}
      </div>
      <p className='text-primary opacity-75 text-lg leading-5'>{description}</p>
    </div>
  )
}

export default Service
