// interfaces
interface SpacerProps {
  size?: number
}

const Spacer: React.FC<SpacerProps> = ({ size = 30 }) => {
  return <div className='bg-background' style={{ height: `${size}vh` }}></div>
}

export default Spacer
