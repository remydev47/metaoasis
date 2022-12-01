'use client';
import { TypingText, TitleText, StartSteps } from "../components";
import { motion } from "framer-motion";
import styles from '../styles'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion'
import { startingFeatures } from "../constants";

const GetStarted = () => (
  <section className={`${styles.paddings} relative, z-10`}>
    Get Started Section
  </section>
);

export default GetStarted;
