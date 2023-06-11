// react

// css

// functions

// components
import Page from '@/components/Page'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import OurClients from '@/components/sections/OurClients'
import OurProjects from '@/components/sections/OurProjects'
import OurServices from '@/components/sections/OurServices'
import OurTeam from '@/components/sections/OurTeam'
import OurTechnologies from '@/components/sections/OurTechnologies'
import WhyUs from '@/components/sections/WhyUs'
import SectionTitle from '@/components/SectionTitle'

const Home: React.FC = () => {
  return (
    <Page title='Home'>
      <SectionTitle
        title='Une expertise à un prix adapté'
        subtitle='pourquoi nous'
      />
      <Hero />
      <WhyUs />
      <OurTeam />
      <OurClients />
      <OurServices />
      <OurTechnologies />
      <OurProjects />
      <Footer />
    </Page>
  )
}

export default Home
