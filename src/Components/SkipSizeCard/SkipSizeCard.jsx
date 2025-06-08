
import React, { useState } from "react";
import styles from "./SkipSizeCard.module.css";
import image from "../../assets/Images/skip.png";

import BookingDialog from '../BookingSkip/BookingSkip';
// import Restriction from '../RestrictionCard/RestrictionCard';

const SkipSizeCard = ({ skip, selected, onSelect, formatPrice, showBookNow  }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [bookingCompleted, setBookingCompleted] = useState(false);

  const isAllowed = skip.allowed_on_road && skip.allows_heavy_waste;

  const handleSelectClick = (e) => {
    e.stopPropagation();

    // If not allowed, just show Restriction and don't call onSelect
    if (!isAllowed) {
      setShowDialog(true);
      return;
    }

    // If allowed, call onSelect and show BookingDialog
    onSelect();
    setShowDialog(true);

  
  };

  const handleBookingSubmit = () => {
    setBookingCompleted(true);      // hide "Book Now" after submit
    setShowDialog(false);          // close dialog
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className={`${styles.card} ${selected ? styles.selected : ""}`}>
      <div className={styles.header}>
        <h3>
          {skip.size} Yard Skip – {skip.hire_period_days} days
        </h3>
      </div>

      <div className={styles.image}>
        <img src={image} alt={`${skip.size} Yard Skip`} className={styles.skipImage} />
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
          {formatPrice(skip.price_before_vat)} <span>+ VAT</span>
        </div>
      </div>

      <div className={styles.actions}>
        {!bookingCompleted && (
          <button
            className={`${styles.btn} ${styles.btnPrimary} ${selected ? styles.selected : ""}`}
            onClick={handleSelectClick}
          >
            {selected && isAllowed ? "Selected" : "Select"}
          </button>
        )}

        <button className={`${styles.btn} ${styles.btnOutline}`}>
          Details
        </button>
      </div>

      {/* Render BookingDialog or Restriction */}
      

  {showDialog && (
  isAllowed ? (
    showBookNow && (
      <BookingDialog
        skipOptions={[skip]}
        onClose={handleCloseDialog}
        onSubmitted={handleBookingSubmit}
      />
    )
  ) : (
    <Restriction open={showDialog} onClose={handleCloseDialog} />
  )
)}


    </div>
  );
};

export default SkipSizeCard;
