// import React from 'react';
// import styles from './WhyChooseUs.module.css';

// function WhyChooseUs() {
//   return (
//     <section className={styles.benefits}>
//       <div className="container">
//         <div className={styles.sectionTitle}>
//           <h2>Why Choose Us</h2>
//         </div>

//         <div className={styles.benefitsContainer}>
//           <div className={styles.benefitCard}>
//             <div className={styles.benefitIcon}>
//               <i className="fas fa-leaf"></i>
//             </div>
//             <h3>Eco-Friendly</h3>
//             <p>We recycle over 90% of all waste collected, minimizing environmental impact.</p>
//           </div>

//           <div className={styles.benefitCard}>
//             <div className={styles.benefitIcon}>
//               <i className="fas fa-truck"></i>
//             </div>
//             <h3>Fast Delivery</h3>
//             <p>Same or next day skip delivery available across the region.</p>
//           </div>

//           <div className={styles.benefitCard}>
//             <div className={styles.benefitIcon}>
//               <i className="fas fa-pound-sign"></i>
//             </div>
//             <h3>Competitive Pricing</h3>
//             <p>Affordable skip hire with no hidden charges or extra fees.</p>
//           </div>

//           <div className={styles.benefitCard}>
//             <div className={styles.benefitIcon}>
//               <i className="fas fa-shield-alt"></i>
//             </div>
//             <h3>Fully Licensed</h3>
//             <p>Fully licensed waste carrier with comprehensive insurance.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;




// src/components/WhyChooseUs.jsx
import React from 'react';
import styles from './WhyChooseUs.module.css';
import BenefitCard from './BenefitCard';
import benefits from './BenefitsData';

function WhyChooseUs() {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Why Choose Us</h2>
        </div>

        <div className={styles.benefitsContainer}>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
