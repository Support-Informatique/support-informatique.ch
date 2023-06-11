// images
import avatar1 from '@/assets/images/blue-avatar-1.svg'
import avatar2 from '@/assets/images/blue-avatar-2.svg'
import avatar3 from '@/assets/images/blue-avatar-3.svg'

// interfaces
interface TeamMemberProps {
  name: string
  title: string
  techs: string[]
  avatar: number
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

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  techs,
  avatar
}) => {
  const avatarImage = getAvatar(avatar)

  return (
    <div className='border border-lightText flex flex-row justify-start align-middle w-[28rem] rounded-[20px] py-4 px-6 gap-8'>
      <img
        src={avatarImage}
        alt='avatar'
        className='object-contain'
      />
      <div className='flex flex-col justify-center'>
        <p className='text-darkText font-bold text-xl'>{name}</p>
        <div>
          <p className='text-lightText text-lg'>{title}</p>
          <img />
        </div>
        <div className='flex flex-row gap-x-2'>
          {techs.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
export default TeamMember
