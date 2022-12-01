'use client';
import { TypingText } from "../components";
import { motion } from "framer-motion";
import styles from '../styles'
import { textVariants, fadeIn, staggerContainer, textVariant } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once:false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
       variants={fadeIn('up', 'tween', 0.2, 1)}
       className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >

      </motion.p>

    </motion.div>
  </section>
);

export default About;
