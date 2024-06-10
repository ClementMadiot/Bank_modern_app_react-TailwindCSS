import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin, FaAirbnb, FaDropbox, FaStar, FaShieldHalved, FaPaperPlane} from 'react-icons/fa6';
import { SiBinance  } from "react-icons/si";

import {
  people01,
  people02,
  people03
} from '../assets'

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
]

export const features = [
  {
    id: 'feature-1',
    icon: <FaStar className='w-[50%] h-[50%] text-[#00F6FF]'/>,
    title: 'Rewards',
    content:
      'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 'feature-2',
    icon: <FaShieldHalved className='w-[50%] h-[50%] text-[#00F6FF]'/>,
    title: '100% Secured',
    content:
      'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'feature-3',
    icon: <FaPaperPlane className='w-[50%] h-[50%] text-[#00F6FF]'/>,
    title: 'Balance Transfer',
    content:
      'A balance transfer credit card can save you a lot of money in interest charges.',
  },
]

export const feedback = [
  {
    id: 'feedback-1',
    content:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
]

export const stats = [
  {
    id: 'stats-1',
    title: 'User Active',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Trusted by Company',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Transaction',
    value: '$230M+',
  },
]

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    link: 'https://www.instagram.com/',
    icon: <FaInstagram className='icons'/>,
  },
  {
    id: 'social-media-2',
    icon: <FaFacebook  className='icons' />,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: <FaXTwitter  className='icons' />,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: <FaLinkedin className='icons' />,
    link: 'https://www.linkedin.com/',
  },
]

export const clients = [
  {
    id: 'client-1',
    logo: <FaAirbnb style={{width:"46px", height:"auto", marginRight:"0.2rem"}}/>,
    desc:"airbnb"
  },
  {
    id: 'client-2',
    logo: <SiBinance style={{width:"36px", height:"auto", marginRight:"0.4rem"}}/>,
    desc: 'BINANCE'
  },
  {
    id: 'client-3',
    logo: "",
    desc: 'coinbase'
  },
  {
    id: 'client-4',
    logo: <FaDropbox style={{width:"36px", height:"auto", marginRight:"0.4rem"}}/>,
    desc: 'Dropbox'
  },
]
