'use client';
import { motion } from "framer-motion";
import styles from '../styles'
import { fadeIn, staggerContainer, zoomIn  } from '../utils/motion'

const Feedback = () => (
  <section className={`${styles.paddings} relative, z-10`}>
   <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once:'false', amount: 0.25}}
     className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 `}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-0.5 sm;p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Samantha
          </h4>
          <p className="text-white font-normal mt-[8px] sm:leading-[22px] leading-[16px]">Founder | The Oasis</p>
        </div>
        <p className="text-gray-400 font-normal mt-[8px] sm:leading-[22px] leading-[16px]">
          "With the development of todays technology, the Oasis is very useful for todays world,or can be called web 3.0"
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="reative flex-1 flex justify-center items-center"
      >
        <img 
         src="/planet-09.png"
         alt='planet-09'
         className='w-full'
        />
      </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
