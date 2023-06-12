// images
import bluredBackground from '@/assets/images/hero-background.png'
import darkLogo from '@/assets/images/logo-support-informatique-dark.svg'
import whiteBottomRounded from '@/assets/images/white-bottom-rounded.svg'

// components
import Button from '../Button'

const Hero: React.FC = () => {
  return (
    <>
      <img
        src={bluredBackground}
        alt='blured background image'
        className='hidden md:block w-full h-full object-cover object-center -translate-y-3'
      />
      <div className='bg-mountains md:drop-shadow-hero-mac bg-bottom md:bg-cover md:rounded-[20px] grid md:absolute w-full md:w-9/12 h-[90vh] md:h-3/4 top-0 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-20 z-10'>
        <div className='hidden md:flex drop-shadow-mac-topbar absolute w-full rounded-t-[20px] h-12 bg-[#AFE3E8] items-center gap-x-3'>
          <div className='ml-3 drop-shadow-mac-topbar-button w-5 h-5 rounded-full bg-red-400' />
          <div className='drop-shadow-mac-topbar-button w-5 h-5 rounded-full bg-yellow-400' />
          <div className='drop-shadow-mac-topbar-button w-5 h-5 rounded-full bg-green-500' />
        </div>
        <div className='flex flex-col justify-around items-center h-full gap-y-40 overflow-hidden pb-15 md:pb-0'>
          <img src={darkLogo} alt='logo' className='h-1/5 sm:h-1/4' />
          <Button text='Explorer' />
        </div>
        <img
          src={whiteBottomRounded}
          alt='white bottom rounded'
          className='block md:hidden absolute -bottom-4 w-full -z-10'
        />
      </div>
    </>
  )
}
export default Hero
