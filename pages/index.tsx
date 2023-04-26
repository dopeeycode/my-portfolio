import Hero from "@/components/Hero";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";

import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden 
    overflow-y-scroll">
     <Navbar/>
     <main className="w-full h-[88vh] mx-auto flex justify-between">
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}} 
        transition={{delay: 1.5}}
      >
        <LeftSide/>
      </motion.div>
      <Hero/> 
     </main>
    </div>
  )
}
