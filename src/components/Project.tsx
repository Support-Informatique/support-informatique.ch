// images
import roundedCardCorner from '@/assets/images/rounded-card-corner.svg'

// components
import Text from '@/components/Text'
import Button from '@/components/Button'
import { IoOpenOutline } from 'react-icons/io5'

// interface
interface ProjectProps {
  title: string
  description: string[]
  image: string
  link: string
  order?: 'left' | 'right'
}

// functions
const getDescList = (description: string[]) => {
  return description.map((desc, i) => (
    <Text key={i} type='lightgray-text'>
      {desc}
    </Text>
  ))
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  link,
  order = 'left'
}) => {
  const descList = getDescList(description)
  const openLink = () => {
    window.open(link, '_blank')
  }
  return (
    <div
      className={`${
        order === 'left' ? 'flex-row' : 'flex-row-reverse'
      } z-10 flex flex-row flex-wrap justify-between border border-black border-opacity-20 bg-lightCard rounded-[20px] w-8/12 relative p-5`}
    >
      <img src={image} className='w-4/6' />
      <div className='flex flex-col justify-center items-center w-1/6 flex-grow gap-y-4 px-12 text-center'>
        <Text type='card-title' className='font-black'>
          {title}
        </Text>
        {descList}
        <Button
          text='Visiter'
          type='accent'
          size='sm'
          icon={IoOpenOutline}
          onClick={openLink}
        />
      </div>
      <div
        className={`absolute ${
          order === 'left' ? 'right-0' : 'left-0 rotate-90'
        } bottom-0 z-0`}
      >
        <img src={roundedCardCorner} />
      </div>
    </div>
  )
}

export default Project
