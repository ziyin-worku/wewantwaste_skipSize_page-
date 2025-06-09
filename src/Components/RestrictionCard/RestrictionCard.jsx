

import React, { useRef, useEffect } from "react";
import styles from "./RestrictionCard.module.css";

const RestrictionCard = ({ open, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }

    const handleCancel = (e) => {
      e.preventDefault(); // Prevent default ESC behavior
      onClose();
    };

    dialog?.addEventListener("cancel", handleCancel);

    return () => dialog?.removeEventListener("cancel", handleCancel);
  }, [open, onClose]);

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.restrictionCard}>
        <h2 className={styles.title}>🚫 Road Placement Not Available</h2>
        <p className={styles.message}>
          The skip size you’ve chosen cannot be placed on public roads due to road
          safety regulations. Please ensure you have adequate private space or
          choose a different skip size.
        </p>
        <button className={styles.cancelButton} onClick={onClose}>
          Choose Different Skip
        </button>
      </div>
    </dialog>
  );
};

export default RestrictionCard;
