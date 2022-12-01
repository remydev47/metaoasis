'use client';
import { TypingText, TitleText } from "../components";
import { motion } from "framer-motion";
import styles from '../styles'
import { staggerContainer,  } from '../utils/motion'

const World = () => (
  <section className={`${styles.paddings} relative, z-10`}>
    <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once:'false', amount: 0.25}}
     className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
       <TypingText title="| People of the World" textStyles="text-center" />
       <TitleText title={<>Track People Around the world and Invite them to Play together in the same world</>}textStyles="text-center" />
    </motion.div>
  </section>
);

export default World;
