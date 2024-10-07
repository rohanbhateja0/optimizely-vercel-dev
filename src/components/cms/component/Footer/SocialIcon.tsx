import React from 'react';
import styles from './Footer.module.css';

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => {
  return <img loading="lazy" src={src} alt={alt} className={styles.socialIcon} />;
};

export default SocialIcon;
