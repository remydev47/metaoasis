'use client';
import { TypingText, TitleText, InsightCard } from "../components";
import { motion } from "framer-motion";
import styles from '../styles'
import { fadeIn, staggerContainer,  } from '../utils/motion'
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative, z-10`}>
    Insights section
  </section>
);

export default Insights;
