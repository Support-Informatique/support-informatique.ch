// components
import LoadingScreen from '@/components/utils/LoadingScreen'
import Hero from '@/components/sections/hero/Hero'
import OurServices from '@/components/sections/ourservices/OurServices'
import OurTeam from '@/components/sections/ourteam/OurTeam'
import OurClients from '@/components/sections/ourclients/OurClients'
import OurTechnologies from '@/components/sections/ourtechnologies/OurTechnologies'
import WhyUs from '@/components/sections/whyus/WhyUs'
import Footer from '@/components/sections/footer/Footer'
import OurProjects from '@/components/sections/ourprojects/OurProjects'

const DefaultSpacer: React.FC = () => {
  return (
    <div className='bg-background h-[30vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh]' />
  )
}

const Home: React.FC = () => {
  return (
    <div>
      <LoadingScreen />
      <Hero />
      <div className='bg-background h-[10vh] md:h-[60vh] lg:h-[45vh] xl:h-[26vh]' />
      <WhyUs />
      <DefaultSpacer />
      <OurTeam />
      <DefaultSpacer />
      <OurClients />
      <DefaultSpacer />
      <OurServices />
      <DefaultSpacer />
      <OurTechnologies />
      <DefaultSpacer />
      <OurProjects />
      <Footer />
    </div>
  )
}

export default Home
