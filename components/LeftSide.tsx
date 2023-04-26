import { motion } from 'framer-motion';

import { TbBrandGithub as GitHubIcon } from 'react-icons/tb'
import {
  SlSocialInstagram as InstagramIcon,
  SlSocialYoutube as YoutubeIcon,
  SlSocialLinkedin as LinkedinIcon
} from 'react-icons/sl'

export default function LeftSide () {
  return (
    <div className=" hidden lgl:flex  sm:flex sticky left-0 flex-col items-center px-3">
      <div className="w-[2px] h-32 bg-textPurple mb-3"/>
      <ul className='flex flex-col gap-4'>
        <motion.li 
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: .0}}
          transition={{delay: 1.6}}
          className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center 
        hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <a href="#">
            <GitHubIcon size={24}/>
          </a>
        </motion.li>
        <motion.li 
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 1.7}}
          className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center 
        hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <a href="#">
            <InstagramIcon size={24}/>
          </a>
        </motion.li>
        <motion.li 
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 1.8}}
          className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center 
        hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <a href="#">
            <YoutubeIcon size={24}/>
          </a>
        </motion.li>
        <motion.li 
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 1.9}}
          className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center 
           hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <a href="#">
            <LinkedinIcon size={24}/>
          </a>
        </motion.li>
      </ul>
    </div>
  )
}
