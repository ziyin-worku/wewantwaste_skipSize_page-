// src/components/BenefitCard.jsx
import React from 'react';
import styles from './WhyChooseUs.module.css'; // OR reuse WhyChooseUs.module.css

function BenefitCard({ icon, title, description }) {
  return (
    <div className={styles.benefitCard}>
      <div className={styles.benefitIcon}>
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BenefitCard;
