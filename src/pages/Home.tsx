// react

// css

// functions

// components
import Button from '@/components/Button'
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
        subtitle='pourquoi nous'
        title='Une expertise à un prix adapté'
        background='peak'
      />
      <SectionTitle
        subtitle='découvrez'
        title='Nos services'
        background='horizon'
      />
      <Button text='Explorer' type='filled'/>
      <Button text='Appelez Elwan' type='outlined'/>
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
