'use client';
import { motion } from "framer-motion";
import styles from '../styles'
import { fadeIn, staggerContainer,  } from '../utils/motion'

const InsightCard = ({imgUrl, title, subtitle, index}) => (
  <motion.div
   variants={fadeIn('up', 'spring', index * 0.5, 1)}
  >
    Insight Card
  </motion.div>
);

export default InsightCard;
