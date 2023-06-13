// components
import LoadingScreen from '@/components/utils/LoadingScreen'
import Spacer from '@/components/utils/Spacer'
import Hero from '@/components/sections/hero/Hero'
import OurServices from '@/components/sections/ourservices/OurServices'
import OurTeam from '@/components/sections/ourteam/OurTeam'
import OurClients from '@/components/sections/ourclients/OurClients'
import OurTechnologies from '@/components/sections/ourtechnologies/OurTechnologies'
import WhyUs from '@/components/sections/whyus/WhyUs'
import Footer from '@/components/sections/footer/Footer'
import OurProjects from '@/components/sections/ourprojects/OurProjects'

const Home: React.FC = () => {
  return (
    <div>
      <LoadingScreen />
      <Hero />
      <Spacer />
      <WhyUs />
      <Spacer size={40} />
      <OurTeam />
      <Spacer />
      <OurClients />
      <Spacer />
      <OurServices />
      <Spacer size={20} />
      <OurTechnologies />
      <Spacer size={20} />
      <OurProjects />
      <Spacer size={20} />
      <Footer />
    </div>
  )
}

export default Home
