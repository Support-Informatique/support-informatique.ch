// images
import bluredBackground from '@/assets/images/hero-background.png'
import darkLogo from '@/assets/images/logo-support-informatique-dark.svg'
import whiteBottomRounded from '@/assets/images/white-bottom-rounded.svg' // images
import projectPreviewSarigai from '@/assets/images/project-preview-sarigai.png'
import projectPreviewCapSurLaConfiance from '@/assets/images/project-preview-cap-sur-la-confiance.png'
import projectPreviewCapSurLaConfianceMobile from '@/assets/images/project-preview-cap-sur-la-confiance-mobile.png'
import projectPreviewLogistock from '@/assets/images/project-preview-logistock.png'

export const heroImages = [bluredBackground, darkLogo, whiteBottomRounded]

export const projects = [
  {
    title: 'SARIGAI',
    description: [
      "Refonte complète du site web de l'association Fribourgeoise SARIGAI.",
      'Site vitrine multilingue moderne et coloré qui reflète les valeurs du client.'
    ],
    image: projectPreviewSarigai,
    link: 'https://sarigai.ch'
  },
  {
    title: 'CAP SUR LA CONFIANCE',
    description: [
      "Développement d'un site pour l'entreprise PAHO Formation Sàrl.",
      'Jeu mobile permettant de développer et booster sa confiance en soi.'
    ],
    image: projectPreviewCapSurLaConfiance,
    imageMobile: projectPreviewCapSurLaConfianceMobile,
    link: 'https://app.capsurlaconfiance.ch'
  },
  {
    title: 'LOGISTOCK',
    description: [
      "Développement d'une plateforme de E-Commerce pour l'entreprise Logistock.",
      "Site d'annonces/achats de matériaux de constructions pour les chantiers en cours."
    ],
    image: projectPreviewLogistock,
    link: 'https://app.logistock.ch'
  }
]
