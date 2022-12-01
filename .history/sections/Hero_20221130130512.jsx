'use client';
import { motion } from "framer-motion";
import styles from '../styles'
import { textVariants, slideIn, staggerContainer } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-16`}>
     <motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}
       className={`${styles.innerWidth} mx-auto flex flex-col`}
     >
      <div className="flex justify-center items-center flex-col relative z-10">

      </div>
     </motion.div>
  </section>
);

export default Hero;
