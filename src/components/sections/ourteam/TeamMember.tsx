// images
import avatar1 from '@/assets/images/blue-avatar-1.svg'
import avatar2 from '@/assets/images/blue-avatar-2.svg'
import avatar3 from '@/assets/images/blue-avatar-3.svg'

// components
import { IoLogoLinkedin } from 'react-icons/io'
import { SiTypescript } from 'react-icons/si'
import { FaReact, FaVuejs, FaPython } from 'react-icons/fa'
import Text from '@/components/utils/Text'

// types
type Tech = 'reactjs' | 'vuejs' | 'typescript' | 'python'

// interfaces
interface TeamMemberProps {
  name: string
  title: string
  techs: Tech[]
  avatar: number
  linkedin?: string
}

// functions
const getAvatar = (avatar: number) => {
  if (avatar === 1) {
    return avatar1
  } else if (avatar === 2) {
    return avatar2
  } else if (avatar === 3) {
    return avatar3
  }
  return avatar1
}

const getTechIcon = (tech: Tech) => {
  switch (tech) {
    case 'typescript':
      return <SiTypescript />
    case 'reactjs':
      return <FaReact />
    case 'vuejs':
      return <FaVuejs />
    case 'python':
      return <FaPython />
    default:
      return <></>
  }
}

const getTechIconsList = (techs: Tech[]) => {
  return techs.map((tech, i) => (
    <div key={i} className='text-2xl text-gray-500'>
      {getTechIcon(tech)}
    </div>
  ))
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  techs,
  avatar,
  linkedin
}) => {
  const avatarImage = getAvatar(avatar)
  const techIconsList = getTechIconsList(techs)

  return (
    <div className='border border-lightText flex flex-col sm:flex-row justify-center sm:justify-start items-center w-[75vw] sm:w-[65vw] md:w-[28rem] rounded-[20px] py-6 px-6 gap-2 sm:gap-8 mx-3'>
      <img
        src={avatarImage}
        alt='avatar'
        className='object-contain w-3/12'
      />
      <div className='flex flex-col justify-center'>
        <Text
          type='card-title'
          className='text-center sm:text-left'
        >
          {name}
        </Text>
        <div className='flex flex-row gap-x-1 justify-center sm:justify-start'>
          <Text
            type='lightgray-text'
            className='text-center sm:text-left'
          >
            {title}
          </Text>
          {linkedin && (
            <a
              href={linkedin}
              target='_blank'
              rel='noreferrer'
              className='flex flex-row gap-x-2 items-center text-secondary text-xl'
            >
              <IoLogoLinkedin />
            </a>
          )}
        </div>
        <div className='flex flex-row gap-x-2 mt-2 justify-center sm:justify-start'>
          {techIconsList}
        </div>
      </div>
    </div>
  )
}
export default TeamMember
