// images
import avatar1 from '@/assets/images/blue-avatar-1.svg'
import avatar2 from '@/assets/images/blue-avatar-2.svg'
import avatar3 from '@/assets/images/blue-avatar-3.svg'

// components
import { IoLogoLinkedin } from 'react-icons/io'
import { SiTypescript } from 'react-icons/si'
import { FaReact, FaVuejs, FaPython } from 'react-icons/fa'

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
  return techs.map((tech, i) => <div key={i} className='text-2xl text-gray-500'>{getTechIcon(tech)}</div>)
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
    <div className='border border-lightText flex flex-col sm:flex-row justify-center sm:justify-start align-middle w-[75vw] md:w-[28rem] rounded-[20px] py-4 px-6 gap-8 mx-3'>
      <img src={avatarImage} alt='avatar' className='object-contain w-3/12 ' />
      <div className='flex flex-col justify-center'>
        <p className='text-darkText font-bold text-2xl text-center sm:text-left'>{name}</p>
        <div className='flex flex-row gap-x-1'>
          <p className='text-lightText text-lg text-center sm:text-left'>{title}</p>
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
        <div className='flex flex-row gap-x-2 mt-2 justify-center sm:justify-start'>{techIconsList}</div>
      </div>
    </div>
  )
}
export default TeamMember
