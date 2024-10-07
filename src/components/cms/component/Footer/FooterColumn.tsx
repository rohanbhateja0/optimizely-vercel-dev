import React from 'react';
import styles from './Footer.module.css';

interface FooterColumnProps {
  icon: string;
  title: string;
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ icon, title, items }) => {
  return (
    <div className={styles.footerColumn}>
      <div className={styles.columnContent}>
        <img loading="lazy" src={icon} alt="" className={styles.columnIcon} />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61474e59802902303ad9ac3290d873cd4fe4c68625b54e0300ce72f1f3bf97a1?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8" alt="" className={styles.columnDivider} />
        <div className={styles.columnTextContent}>
          <div className={styles.columnTitle}>{title}</div>
          {items.map((item, index) => (
            <div key={index} className={index === 0 ? styles.columnSubtitle : styles.columnText}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterColumn;
