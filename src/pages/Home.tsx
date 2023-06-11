// react

// css

// functions

// components
// import Button from '@/components/Button'
// import Footer from '@/components/sections/Footer'
import Button from '@/components/Button'
import Hero from '@/components/sections/Hero'
// import OurClients from '@/components/sections/OurClients'
// import OurProjects from '@/components/sections/OurProjects'
// import OurServices from '@/components/sections/OurServices'
// import OurTeam from '@/components/sections/OurTeam'
// import OurTechnologies from '@/components/sections/OurTechnologies'
// import WhyUs from '@/components/sections/WhyUs'
import SectionTitle from '@/components/SectionTitle'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className='bg-background h-[10vh] md:h-[60vh] lg:h-[45vh] xl:h-[26vh] 2xl:h[10vh]'/>
      <SectionTitle
        subtitle='pourquoi nous'
        title='Une expertise à un prix adapté'
        background='peak'
      />
      <p className='text-primary text-center w-full md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto px-6 text-xl mb-10'>
        Nous sommes une équipe de jeunes passionnés, possédant une formation
        solide et une expérience précieuse en développement web. Parallèlement à
        notre activité, nous sommes engagés dans des études supérieures pour
        continuellement affiner nos compétences et élargir notre horizon
        technologique. Nous offrons des services de haute qualité à des tarifs
        abordables, convaincus que l&apos;excellence ne devrait pas être un
        luxe, mais accessible à tous. Que vous soyez une start-up, une PME ou
        une grande entreprise, nous sommes prêts à concrétiser vos visions
        numériques avec passion et expertise.
      </p>
      <div className='flex flex-row flex-wrap gap-x-16 gap-y-4 justify-center'>
        <Button text='Nos services' type='filled' />
        <Button text='Nous contacter' type='outlined' />
      </div>
      <SectionTitle
        subtitle='découvrez'
        title='Nos services'
        background='horizon'
      />
      {/* <Button text='Explorer' type='filled' />
      <Button text='Appelez Elwan' type='outlined' />
      <WhyUs />
      <OurTeam />
      <OurClients />
      <OurServices />
      <OurTechnologies />
      <OurProjects />
      <Footer /> */}
    </div>
  )
}

export default Home
