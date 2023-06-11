// react

// css

// functions

// components
// import Button from '@/components/Button'
// import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import OurTeam from '@/components/sections/OurTeam'
import WhyUs from '@/components/sections/WhyUs'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className='bg-background h-[10vh] md:h-[60vh] lg:h-[45vh] xl:h-[26vh] 2xl:h[10vh]'/>
      <WhyUs />
      <div className='bg-background h-96'/>
      <OurTeam />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Home
