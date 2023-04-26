
import { motion } from "framer-motion"

export default function Hero () {
  return (
    <motion.section 
      id="home"
      className="max-w-contentContainer w-full mx-auto py-10 px-3 mdl:py-24 flex flex-col gap-4
      mdl:px-10 xl:px-4"
      initial={{opacity: 0}}
      animate={{opacity: 1}} 
      transition={{delay: .8}}
      >
      <motion.h3 
        initial={{y: 10, opacity: 10}}
        animate={{y:0, opacity: 1}}
        transition={{duration: .5, delay: .9}}
        className="font-semibold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-300
    to-purple-900"
    >
        Ola, me chamo
      </motion.h3>
      <motion.h1
        initial={{y: 10, opacity: 10}}
        animate={{y:0, opacity: 1}}
        transition={{duration: .5, delay: 1}} 
        className="font-extrabold text-transparent text-6xl mdl:text-7xl  lgl:text-8xl bg-clip-text bg-gradient-to-r from-textPurple 
      to-zinc-300 via-purple-400"
      >
        Dopeey
      </motion.h1>
      <motion.span
        initial={{y: 10, opacity: 10}}
        animate={{y:0, opacity: 1}}
        transition={{duration: .5, delay: 1.1}} 
        className="block font-extrabold text-4xl mdl:text-5xl lgl:text-6xl text-transparent text bg-clip-text bg-gradient-to-r 
      from-gray-50 to-gray-300 via-zinc-600"
      >
        Contruo coisas para web.
      </motion.span>
      <motion.p
        initial={{y: 10, opacity: 10}}
        animate={{y:0, opacity: 1}}
        transition={{duration: .5, delay: 1.2}}  
        className="text-base md:max-w-[650px] mt-2 lgl:mt-4 text-textDark font-medium "
        >
        Sou um desenvolvedor com ampla experiência em tecnologias de ponta para construção de interfaces. 
        Especializado em <span className="text-textLight font-bold font-fontCode"> Next.js, React, TypeScript, JavaScript, Tailwind CSS e Framer Motion,</span> tenho um sólido
        conhecimento em criação de aplicações web modernas e escaláveis.
      </motion.p>
      <motion.a 
        initial={{y: 10, opacity: 10}}
        animate={{y:0, opacity: 1}}
        transition={{duration: .5, delay: 1.3}} 
        href="#">
        <button 
          className="border border-textPurple py-3 px-3 rounded-md font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r  from-gray-300 to-purple-300 via-purple-400"
          >
          Veja meus projetos.
        </button>
      </motion.a>
    </motion.section>
  )
}
