// react
import { useRef } from 'react'

// components
import { motion } from 'framer-motion'

// functions
import { useInView } from 'framer-motion'

// interfaces
interface LogoGridProps {
  className?: string
  logos: string[]
}

const LogoGrid: React.FC<LogoGridProps> = ({ className = '', logos }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref) ? 1 : 0

  return (
    <div
      className={`grid grid-cols-3 xl:grid-cols-6 gap-y-8 justify-items-center mix-blend-darken select-none pointer-events-none ${className}`}
      ref={ref}
    >
      {logos.map((logo, index) => (
        <motion.div
          key={`logo-${index}-${isInView}`}
          className='flex justify-center items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.08 }}
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
