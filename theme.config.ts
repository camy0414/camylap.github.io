import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Accessible Astro',
  id: 'accessible-astro-starter',
  logo: logoImage,
  seo: {
    title: 'Accessible Astro Starter',
    description:
      'An Accessible Starter Theme for Astro including several accessibility features and tools to help you build faster.',
    author: 'Incluud',
    image: previewImage, 
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',

    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
{
  type: 'link',
  label: 'Presentación',
  href: `${import.meta.env.BASE_URL}presentacion`,
},

{
  type: 'link',
  label: 'Evidencias',
  href: `${import.meta.env.BASE_URL}evidencias`,
},
      

      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
      {
        type: 'link',
        label: 'Go to our GitHub page, opens in new tab',
        href: 'https://github.com/camy0414',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/incluud/',
      icon: 'lucide:github',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/incluud.dev',
      icon: 'lucide:bot-message-square',
    },
    {
      label: 'Open Collective',
      href: 'https://opencollective.com/incluud',
      icon: 'lucide:hand-heart',
    },
  ],
})
