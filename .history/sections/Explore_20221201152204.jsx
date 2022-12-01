'use client';
import { useState } from "react";
import { TypingText, ExploreCard, TitleText } from "../components";
import { motion } from "framer-motion";
import styles from '../styles'
import { staggerContainer } from '../utils/motion'
import { exploreWorlds } from "../constants";

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    Explore section
  </section>
);

export default Explore;
