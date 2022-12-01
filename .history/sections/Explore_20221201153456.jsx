'use client';
import { useState } from "react";
import { TypingText, ExploreCard, TitleText } from "../components";
import { motion } from "framer-motion";
import styles from '../styles'
import { staggerContainer } from '../utils/motion'
import { exploreWorlds } from "../constants";

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The Worlds" textStyles="text-center" />
      <TitleText title={<>Choose the World You Want <br className="md:block hidden"/>to explore</>} textStyles="text-center" />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"></div>
    </motion.div>
  </section>
);

export default Explore;
