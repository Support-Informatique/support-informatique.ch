// json
import { projects } from '@/data/data'

// components
import SectionTitle from '@/components/utils/SectionTitle'
import Project from '@/components/sections/ourprojects/Project'

const OurProjects: React.FC = () => {
  return (
    <>
      <SectionTitle subtitle='visitez' title='Nos projets phares' />
      <div className='flex flex-col items-center gap-y-12'>
        {projects.map((project, i) => (
          <Project
            key={i}
            order={i % 2 === 0 ? 'left' : 'right'}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            imageMobile={project.imageMobile}
          />
        ))}
      </div>
    </>
  )
}
export default OurProjects
