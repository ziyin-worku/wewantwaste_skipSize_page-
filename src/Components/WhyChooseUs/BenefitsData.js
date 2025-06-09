// // src/data/benefitsData.js
// const benefits = [
//     {
//       icon: 'fa-leaf',
//       title: 'Eco-Friendly',
//       description: 'We recycle over 90% of all waste collected, minimizing environmental impact.',
//     },
//     {
//       icon: 'fa-truck',
//       title: 'Fast Delivery',
//       description: 'Same or next day skip delivery available across the region.',
//     },
//     {
//       icon: 'fa-pound-sign',
//       title: 'Competitive Pricing',
//       description: 'Affordable skip hire with no hidden charges or extra fees.',
//     },
//     {
//       icon: 'fa-shield-alt',
//       title: 'Fully Licensed',
//       description: 'Fully licensed waste carrier with comprehensive insurance.',
//     },
//   ];
  
//   export default benefits;
  

// src/data/benefitsData.js
import { FaLeaf, FaTruck, FaPoundSign, FaShieldAlt } from 'react-icons/fa';

const benefits = [
  {
    icon: FaLeaf,
    title: 'Eco-Friendly',
    description: 'We recycle over 90% of all waste collected, minimizing environmental impact.',
  },
  {
    icon: FaTruck,
    title: 'Fast Delivery',
    description: 'Same or next day skip delivery available across the region.',
  },
  {
    icon: FaPoundSign,
    title: 'Competitive Pricing',
    description: 'Affordable skip hire with no hidden charges or extra fees.',
  },
  {
    icon: FaShieldAlt,
    title: 'Fully Licensed',
    description: 'Fully licensed waste carrier with comprehensive insurance.',
  },
];

export default benefits;
