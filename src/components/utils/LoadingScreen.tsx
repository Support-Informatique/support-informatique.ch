// react
import { useState, useEffect } from 'react'

// components
import { motion } from 'framer-motion'

// images
import darkLogo from '@/assets/images/logo-support-informatique-dark.svg'
import { heroImages } from '@/data/data'

// interfaces
const LoadingScreen: React.FC = () => {
  // states
  const [loading, setLoading] = useState(true)
  const [showOverlay, setShowOverlay] = useState(true)
  const [progress, setProgress] = useState(0)

  const progressPercent = (progress / heroImages.length) * 100

  // handlers
  const handleLoadImage = async (url: string) => {
    return await new Promise((resolve, reject) => {
      const img = new Image()
      img.src = url
      img.onload = () => {
        setProgress(prev => {
          if (prev >= heroImages.length) return prev
          return prev + 1
        })
        resolve(img)
      }
      img.onerror = reject
    })
  }

  const handleLoadImages = async (urls: string[]) => {
    await Promise.all(urls.map(handleLoadImage))
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    handleLoadImages(heroImages).catch(console.error)
  }, [heroImages])

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowOverlay(false)
        document.body.style.overflow = 'auto'
      }, 450)
    }
  }, [loading])

  return (
    showOverlay && (
      <motion.div
        className='fixed inset-0 z-50 bg-background text-primary flex flex-col justify-center items-center'
        key='loading-screen'
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={darkLogo}
          alt='logo'
          className='w-80 md:w-96 select-none pointer-events-none'
        />

        <div className='w-80 md:w-96 px-4 h-1 mt-5'>
          <motion.div
            className='h-full bg-primary rounded-full'
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>
    )
  )
}

export default LoadingScreen
