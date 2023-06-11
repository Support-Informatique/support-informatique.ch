import SectionTitle from '@/components/SectionTitle'
import Button from '@/components/Button'

const WhyUs: React.FC = () => {
  return (
    <>
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
    </>
  )
}
export default WhyUs
