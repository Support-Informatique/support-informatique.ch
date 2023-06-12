// react

// css

// functions

// components
// import Button from '@/components/Button'
// import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import OurServices from '@/components/sections/OurServices'
import OurTeam from '@/components/sections/OurTeam'
import OurClients from '@/components/sections/OurClients'
import WhyUs from '@/components/sections/WhyUs'

const DefaultSpacer: React.FC = () => {
  return (
    <div className='bg-background h-[30vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh]' />
  )
}

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className='bg-background h-[10vh] md:h-[60vh] lg:h-[45vh] xl:h-[26vh]' />
      <WhyUs />
      <DefaultSpacer />
      <OurTeam />
      <DefaultSpacer />
      <OurServices />
      <OurClients />
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Home
