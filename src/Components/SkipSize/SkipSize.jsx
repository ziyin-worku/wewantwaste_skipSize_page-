import React, { useEffect, useState } from "react";
import SkipSizeCard from "../SkipSizeCard/SkipSizeCard";
import styles from "./SkipSize.module.css";
import endpoints from "../../Api/endpoints";
import axios from "axios";

const SkipSize = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    const postcode = "NR32";
    const area = "Lowestoft";

    const url = endpoints.getSkipsByLocation(postcode, area);

    axios
      .get(url)
      .then((response) => {
        // console.log(response.data); // Log the response data for debugging
        setSkips(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Axios error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSelect = (skip) => {
    setSelectedSkip(skip);
  };

  const formatPrice = (price) => `£${price.toFixed(2)}`;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Our Skip Sizes</h2>
        <p>Select the right skip size for your needs</p>
      </div>

      {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading skip sizes...</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {skips.map((skip) => (
            <SkipSizeCard
              key={skip.id}
              skip={skip}
              selected={selectedSkip?.id === skip.id}
              onSelect={() => handleSelect(skip)}
              formatPrice={formatPrice}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SkipSize;
