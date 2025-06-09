import React, { useRef, useState } from "react";
import styles from "./BookingSkip.module.css";

function BookingSkip({ skipOptions = [], onClose, onSubmitted }) {
  const dialogRef = useRef(null);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openDialog = () => {
    setShowBackdrop(true);
    dialogRef.current?.showModal();
    setSubmitted(false);
  };

  const closeDialog = () => {
    setShowBackdrop(false);
    dialogRef.current?.close();
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skipSize: "",
    address: "",
    deliveryDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      // closeDialog();
      if (onSubmitted) onSubmitted();
    }, 2000);
  };

  return (
    <>
      <button onClick={openDialog} className={styles.openButton}>
        Book now
      </button>

      {showBackdrop && <div className={styles.backdrop}></div>}

      <dialog ref={dialogRef} className={styles.dialog}>
        {/* <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" placeholder="Enter your name" onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="Enter your email" onChange={handleChange} required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="Enter your phone number" onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="address">Delivery Address</label>
              <input id="address" type="text" placeholder="Enter delivery address" onChange={handleChange} required />
            </div>
          </div>

          <div className={styles.row}>
            
            <div className={styles.inputGroup}>
              <label htmlFor="deliveryDate">Preferred Delivery Date</label>
              <input id="deliveryDate" type="date" onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
            <label htmlFor="notes">Additional Information</label>
            <textarea
              id="notes"
              placeholder="Any special requirements or notes..."
              rows={4}
              onChange={handleChange}
            />
          </div>

          </div>

          

          <menu className={styles.menu}>
            <button type="submit">Submit</button>
            <button type="button" onClick={closeDialog}>Cancel</button>
            
          </menu>

          {submitted && (
            <div className={styles.successMessage}>🎉 Booking submitted successfully!</div>
          )}
        </form> */}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                type="text"
                placeholder="Enter your postcode"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                placeholder="Enter your city"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="houseNumber">House/Flat Number</label>
              <input
                id="houseNumber"
                type="text"
                placeholder="Enter house or flat number"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Waste Type</label>
              <details className={styles.dropdown}>
                <summary>Select Waste Type(s)</summary>
                <div className={styles.checkboxGroup}>
                  <ul>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="wasteType"
                          value="garden"
                          onChange={handleChange}
                        />{" "}
                        Garden Waste
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="wasteType"
                          value="construction"
                          onChange={handleChange}
                        />{" "}
                        Construction Waste
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="wasteType"
                          value="household"
                          onChange={handleChange}
                        />{" "}
                        Household Waste
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="wasteType"
                          value="commercial"
                          onChange={handleChange}
                        />{" "}
                        Commercial Waste
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="deliveryDate">Preferred Delivery Date</label>
              <input
                id="deliveryDate"
                type="date"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="notes">Additional Information</label>
              <textarea
                id="notes"
                placeholder="Any special requirements or notes..."
                rows={4}
                onChange={handleChange}
              />
            </div>
          </div>

          <menu className={styles.menu}>
            <button type="submit">Submit</button>
            <button type="button" onClick={closeDialog}>
              Cancel
            </button>
          </menu>

          {submitted && (
            <div className={styles.successMessage}>
              🎉 Booking submitted successfully!
            </div>
          )}
        </form>
      </dialog>
    </>
  );
}

export default BookingSkip;
