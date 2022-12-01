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
       className=""
     >

     </motion.div>
  </section>
);

export default Hero;
