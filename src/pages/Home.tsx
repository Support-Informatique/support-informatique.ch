// react

// css

// functions

// components
// import Button from '@/components/Button'
// import Footer from '@/components/sections/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import Hero from '@/components/sections/Hero'
import OurServices from '@/components/sections/OurServices'
import OurTeam from '@/components/sections/OurTeam'
import OurClients from '@/components/sections/OurClients'
import OurTechnologies from '@/components/sections/OurTechnologies'
import WhyUs from '@/components/sections/WhyUs'
import Footer from '@/components/sections/Footer'
import OurProjects from '@/components/sections/OurProjects'

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
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  )
}

export default Home
