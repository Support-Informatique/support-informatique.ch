// components
import InfiniteBanner from '@/components/sections/ourtechnologies/InfiniteBanner'

// images
import git from '@/assets/images/technos/git.png'
import fastapi from '@/assets/images/technos/fastapi.png'
import figma from '@/assets/images/technos/figma.png'
import termius from '@/assets/images/technos/termius.png'
import copilot from '@/assets/images/technos/copilot.png'
import wordpress from '@/assets/images/technos/wordpress.png'
import react from '@/assets/images/technos/react.png'
import nodejs from '@/assets/images/technos/nodejs.png'
import vscode from '@/assets/images/technos/vscode.png'
import openai from '@/assets/images/technos/openai.png'
import tailwind from '@/assets/images/technos/tailwind.png'
import postman from '@/assets/images/technos/postman.png'
import typescript from '@/assets/images/technos/typescript.png'
import photoshop from '@/assets/images/technos/photoshop.png'
import python from '@/assets/images/technos/python.png'

const topTechnos = [
  git,
  fastapi,
  figma,
  termius,
  copilot,
  wordpress,
  react,
  nodejs
]

const bottomTechnos = [
  vscode,
  openai,
  tailwind,
  postman,
  typescript,
  photoshop,
  python
]

const OurTechnologies: React.FC = () => {
  return (
    <div className='our-technologies'>
      <InfiniteBanner images={topTechnos} speed={0.2} />
      <InfiniteBanner images={bottomTechnos} speed={0.2} reverse />
    </div>
  )
}
export default OurTechnologies
