'use client';
import { TypingText, TitleText, InsightCard } from "../components";
import { motion } from "framer-motion";
import styles from '../styles'
import { fadeIn, staggerContainer,  } from '../utils/motion'
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative, z-10`}>
    <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once:'false', amount: 0.25}}
     className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <TitleText title="Insights about the Oasis" textStyles="text-center" />
    </motion.div>
  </section>
);

export default Insights;
