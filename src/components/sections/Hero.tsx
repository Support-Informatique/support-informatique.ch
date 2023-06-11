// images
import bluredBackground from '@/assets/images/hero-background.png'
import darkLogo from '@/assets/images/logo-support-informatique-dark.svg'
import Button from '../Button'

const Hero: React.FC = () => {
  return (
    <div>
      <img
        src={bluredBackground}
        alt='blured background image'
        className='w-full h-full object-cover object-center'
      />
      <div className='bg-mountains drop-shadow-hero-mac bg-top bg-cover rounded-[20px] absolute w-9/12 h-3/4 top-0 left-1/2 transform -translate-x-1/2 translate-y-20'>
        <div className='drop-shadow-mac-topbar absolute w-full rounded-t-[20px] h-12 bg-[#AFE3E8] flex items-center gap-x-3'>
          <div className='ml-3 drop-shadow-mac-topbar-button w-5 h-5 rounded-full bg-red-400' />
          <div className='drop-shadow-mac-topbar-button w-5 h-5 rounded-full bg-yellow-400' />
          <div className='drop-shadow-mac-topbar-button w-5 h-5 rounded-full bg-green-500' />
        </div>
        <div className='flex flex-col justify-around items-center h-full gap-y-40'>
          <img src={darkLogo} alt='logo' className='h-1/4' />
          <Button text='Explorer' />
        </div>
      </div>
    </div>
  )
}
export default Hero
