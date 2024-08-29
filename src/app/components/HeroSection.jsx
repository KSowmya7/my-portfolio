"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white text-center mb-4 text-2xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-pink-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sowmya",
                1000,
                "Web Developer",
                1000,
                "Full Stack Developer",
                1000,
                "Front-end Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-yellow-100"
            />
          </h1>
          <div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 text-yellow-500"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;