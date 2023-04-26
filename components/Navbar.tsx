import Image from "next/image";
import { motion } from "framer-motion";

import { logo } from '../public/assets/index'

export default function Navbar () {
  return (
    <header className="sticky top-0 z-50 bg-bodyColor px-4 w-full shadow-navbarShadow">  
      <div className="max-w-container mx-auto h-full p-5 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.7}}>
          <h2 className="font-extrabold bg-gradient-to-r  from-purple-300 to-textPurple text-transparent bg-clip-text text-5xl">
            D
            <span 
              className="text-2xl font-bold border-y rounded-md p-1 border-textPurple text-textPurple">
              opeey
            </span>
          </h2>
        </motion.div>
        <nav className="hidden mdl:flex items-center gap-4">
          <ul className="flex gap-4">
            <motion.li 
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .1}}
              className="font-bold text-textDark text-sm hover:text-textPurple transition-all duration-300 group">
              <a href="#home">
                <span 
                  className="text-textPurple font-semibold group-hover:text-textDark transition-all duration-300">#</span>
                Inicio
              </a>
            </motion.li>
            <motion.li 
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{ delay: .2}}
              className="font-bold text-textDark text-sm hover:text-textPurple transition-all duration-300 group">
              <a href="#home">
                <span 
                  className="text-textPurple font-semibold group-hover:text-textDark transition-all duration-300">#</span>
                Sobre-mim
              </a>
            </motion.li>
            <motion.li 
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{ delay: .3}}
              className="font-bold text-textDark text-sm hover:text-textPurple transition-all duration-300 group">
              <a href="#home">
                <span 
                  className="text-textPurple font-semibold group-hover:text-textDark transition-all duration-300">#</span>
                Experiência
              </a>
            </motion.li>
            <motion.li 
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .4}}
              className="font-bold text-textDark text-sm hover:text-textPurple transition-all duration-300 group">
              <a href="#home">
                <span 
                  className="text-textPurple font-semibold group-hover:text-textDark transition-all duration-300">#</span>
                Projetos
              </a>
            </motion.li>
            <motion.li 
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .5}}
              className="font-bold text-textDark text-sm hover:text-textPurple transition-all duration-300 group">
              <a href="#home">
                <span 
                  className="text-textPurple font-semibold group-hover:text-textDark transition-all duration-300">#</span>
                Contato
              </a>
            </motion.li>
          </ul>
          <a href="../">
            <motion.button 
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .6}}
              className="px-4 py-2 font-bold rounded-md text-textPurple text-[13px] border border-textPurple
            hover:bg-hoverColor duration-300">
                Resumo
            </motion.button>
          </a>
        </nav>
        <motion.div 
          initial={{opacity: 0, x: 90}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: .7}}
          className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textPurple cursor-pointer 
          overflow-hidden group'>
            <span className='w-full h-[2px] bg-textPurple inline-flex transform group-hover:translate-x-2 transition-all
            ease-in-out duration-300'></span>
            <span className='w-full h-[2px] bg-textPurple inline-flex transform translate-x-2 group-hover:translate-x-[-3] transition-all
            ease-in-out duration-300'></span>
            <span className='w-full h-[2px] bg-textPurple inline-flex transform group-hover:translate-x-3 transition-all
            ease-in-out duration-300'></span>
            <span className='w-full h-[2px] bg-textPurple inline-flex transform translate-x-2 group-hover:translate-x-3 transition-all
            ease-in-out duration-300'></span>
        </motion.div>
      </div>
    </header>
  )
}
