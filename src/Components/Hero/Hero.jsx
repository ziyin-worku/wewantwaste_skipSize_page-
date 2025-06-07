import React from "react";
import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.container}>
      <h2>Find the Perfect Skip Size for Your Project</h2>
      <p>
        Choose from our range of skip sizes to efficiently manage your waste.
        Environmentally friendly disposal guaranteed.
      </p>
    </div>
  </section>
);

export default Hero;
