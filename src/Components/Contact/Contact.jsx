
import styles from "./Contact.module.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.sectionTitle}>
        <h2>Contact Us</h2>
      </div>

      <div className={styles.contactWrapper}>
        <div className={`${styles.contactInfo} ${styles.fadeIn}`}>
          <p className={styles.item}>
            <FaMapMarkerAlt className={styles.icon} />
            Nottingham, England GB
          </p>
          <p className={styles.item}>
            <FaPhoneAlt className={styles.icon} />
             0800 808 5475
          </p>
          <p className={styles.item}>
            <FaEnvelope className={styles.icon} />
            info@wewantwaste.co.uk
          </p>
          <p className={styles.item}>
            <FaClock className={styles.icon} />
            Mon-Fri: 8am-6pm, Sat: 9am-4pm
          </p>
        </div>

        <div className={`${styles.mapContainer} ${styles.fadeIn}`}>
          <iframe
            title="Nottingham Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95842.9634602076!2d-1.2393110950215365!3d52.95478319885733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3f7f3ce1b0f%3A0x96341ccf4a2a9a19!2sNottingham%2C%20UK!5e0!3m2!1sen!2set!4v1717912326170!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
