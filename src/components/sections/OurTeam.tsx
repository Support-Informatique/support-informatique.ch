// components
import SectionTitle from '@/components/SectionTitle'
import TeamMember from '@/components/TeamMember'

const OurTeam: React.FC = () => {
  return (
    <div>
      <SectionTitle subtitle='qui sommes nous' title='Notre équipe' />
      <div className='flex flex-row flex-wrap justify-evenly align-middle gap-4'>
        <TeamMember
          name='Lionel Ding'
          title='Fondateur & Développeur'
          techs={['tech1', 'tech2']}
          avatar={1}
        />
        <TeamMember
          name='Elwan Mayencourt'
          title='Développeur'
          techs={['tech1', 'tech2']}
          avatar={2}
        />
        <TeamMember
          name='Alexis Stella'
          title='Développeur'
          techs={['tech1', 'tech2']}
          avatar={3}
        />
      </div>
    </div>
  )
}
export default OurTeam
