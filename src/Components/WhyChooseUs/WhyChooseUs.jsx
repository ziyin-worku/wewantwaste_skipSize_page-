
import React from 'react';
import styles from './WhyChooseUs.module.css';
import benefits from './BenefitsData';

function WhyChooseUs() {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Why Choose Us</h2>
        </div>

        <div className={styles.benefitsContainer}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className={styles.benefitCard}>
                <Icon className={styles.icon} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
