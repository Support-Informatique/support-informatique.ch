// components
import { motion } from 'framer-motion'

// interfaces
interface LogoGridProps {
  className?: string
  logos: string[]
}

const LogoGrid: React.FC<LogoGridProps> = ({ className = '', logos }) => {
  const animation = {
    offscreen: {
      opacity: 0,
      y: 20
    },
    onscreen: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <div
      className={`grid grid-cols-3 xl:grid-cols-6 gap-y-8 justify-items-center mix-blend-darken select-none pointer-events-none ${className}`}
    >
      {logos.map((logo, index) => (
        <motion.div
          key={`logo-${index}`}
          className='flex justify-center items-center'
          initial='offscreen'
          whileInView='onscreen'
          variants={animation}
          viewport={{ once: true, amount: 0.8 }}
        >
          <img
            src={logo}
            alt='client-logo'
            className='max-h-20 max-w-[100px] lg:max-w-[200px]'
          />
        </motion.div>
      ))}
    </div>
  )
}

export default LogoGrid
