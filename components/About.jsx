import React from "react"
import Tilt from "react-tilt"
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[220px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[0px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 30,
          scale: 0.5,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[16px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[20px]"
      >
        Hello, I'm Alifa Pramodya! 
        From aircraft systems to diving into neural networks, I love exploring how technology shapes our world. 
        I’ve found a growing passion for Artificial Intelligence and Machine Learning. 
        Although I’m still at the beginning of this journey, 
        I’m excited to keep learning, experimenting, and sharing what I discover along the way.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about");