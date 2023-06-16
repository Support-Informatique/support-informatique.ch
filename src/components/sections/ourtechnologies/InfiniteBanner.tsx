// components
import { HorizontalTicker } from 'react-infinite-ticker'
import { motion } from 'framer-motion'

// interfaces
interface InfiniteBannerProps {
  images: string[]
  speed?: number
  reverse?: boolean
}

const InfiniteBanner: React.FC<InfiniteBannerProps> = ({
  images,
  speed = 1,
  reverse = false
}) => {
  const containerClass =
    'relative w-20 md:w-64 h-16 md:h-24 mx-2 flex items-center justify-center pointer-events-none select-none'

  const cardVariants = {
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
    <motion.div
      className='relative ticker'
      initial='offscreen'
      whileInView='onscreen'
      variants={cardVariants}
      viewport={{ once: true, amount: 0.8 }}
    >
      <HorizontalTicker duration={20000 / speed} reverse={reverse}>
        {images.map((image, index) => (
          <motion.div key={index} className={containerClass}>
            <img className='h-8 md:h-10' src={image} alt='technology cyan logo' />
          </motion.div>
        ))}
      </HorizontalTicker>
    </motion.div>
  )
}

export default InfiniteBanner
