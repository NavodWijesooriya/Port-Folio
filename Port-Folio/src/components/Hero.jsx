import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Navod</h1>
        <p className={styles.description}>
        I'm undergraduate student in University of Colombo School of Computing ,
        and learning fontend developing 
        </p>
        <a href="mailto:navodtwijesooriya@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mypic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};



