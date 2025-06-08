import React from "react";
import styles from "./SkipSizeCard.module.css";
import image from "../../assets/Images/skip.png"; // Placeholder image, replace with actual skip image URL

const SkipSizeCard = ({ skip, selected, onSelect, formatPrice }) => {
  return (
    
    <div
      className={`${styles.card} 
      ${selected ? styles.selected : ""}`}
      // onClick={onSelect}

    >
      <div className={styles.header}>
        <h3>
          {skip.size} Yard Skip – {skip.hire_period_days} days
        </h3>
        {/* <p>Perfect for small domestic clearances</p> */}
      </div>

      <div className={styles.image}>
        <img
          // src={skip.image_url}
          src={image} // Placeholder image, replace with actual skip image URL
          alt={`${skip.size} Yard Skip`}
          className={styles.skipImage}
        />
      </div>

      <div className={styles.details}>
        <div className={styles.specs}>
          <div className={styles.specRow}>
            <span>On Road:</span>
            <span>{skip.allowed_on_road ? "✅" : "❌"}</span>
          </div>
          <div className={styles.specRow}>
            <span>Heavy Waste:</span>
            <span>{skip.allows_heavy_waste ? "✅" : "❌"}</span>
          </div>
          <div className={styles.specRow}>
            <span>VAT:</span>
            <span>{skip.vat}%</span>
          </div>
        </div>
        <div className={styles.price}>
          {formatPrice(skip.price_before_vat)} <span> + VAT</span>
        </div>
      </div>

      <div className={styles.actions}>
        {/* ********************** */}
        <button
          className={`${styles.btn} ${styles.btnPrimary} ${
            selected ? styles.selected : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
        >
          {selected ? "Selected" : "Select"}
          {/* {selected ? <Booking /> : "Select"} */}
        </button>

        <button className={`${styles.btn} ${styles.btnOutline}`}>
          Details
        </button>
      </div>
    </div>
  );
};

export default SkipSizeCard;
