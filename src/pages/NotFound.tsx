// components
import Button from '@/components/utils/Button'

const NotFound: React.FC = () => {
  document.body.style.backgroundColor = '#F2F4F6'

  const goBackHome = () => {
    window.location.href = '/'
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold'>404</h1>
      <h2 className='text-2xl font-bold mb-5'>How did you end up here?</h2>
      <Button
        size='sm'
        type='outlined'
        text='Go back home'
        onClick={goBackHome}
      />
    </div>
  )
}

export default NotFound
