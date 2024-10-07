import React from "react";
import styles from "./Footer.module.css";
import FooterColumn from "./FooterColumn";
import SocialIcon from "./SocialIcon";

const Footer: React.FC = () => {
  const footerColumns = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/473c1abdd36774afbbf545cbbcd2ca8d462eb63e8aae816a8a7d66c0894869e0?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8",
      title: "WINDOWS & DOORS",
      items: ["Windows", "Exterior Doors", "Interior Doors", "Patio Doors"],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8331df9bd8fdfda6660844592d88feb2d5fcab740b89984cc634119fd4b0f0f1?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8",
      title: "SUPPORT & TOOLS",
      items: ["Customer Service", "Sizing Documents", "Brochures"],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/938e92e7060d921398e2c537e0d93bb4d154c22759345ffaaf8d93505ef89b2a?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8",
      title: "PROJECT HELP",
      items: [
        "Replacing Windows",
        "Replacing Exterior Doors",
        "Replacing Interior Doors",
        "Replacing Patio Doors",
      ],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/72a51e15491cc78da795f2b2961db6d32d534502dbcf320fea74622617a6fe74?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8",
      title: "OUR COMPANY",
      items: ["About Us", "Press Releases", "Careers", "Contact Us"],
    },
  ];

  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc6ae185583d6f07db9c732abc3e372cd22469a4ef150671e43ff444026c519a?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/15823a25dce3be16c69d16b996c30c9a31860547f6062ada681b3be5ec2e82f4?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f951be31d7179cd952675c55178522a64a4d12e685b5487d33dcb4f19be1346?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/39cc42105a71cd12812af1c676b1d13c033370e3696280132fb814e883a5749f?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8",
      alt: "LinkedIn",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ea7a863a152cf5e9ff516f295b586fc38f27b5a9688aa928559da9b014dc1f8?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8",
      alt: "YouTube",
    },
  ];

  const footerLinks = [
    "Privacy Policy",
    "Cookie Policy",
    "Terms and Conditions",
    "International",
    "Accessibility Plan",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumns}>
            {footerColumns.map((column, index) => (
              <FooterColumn key={index} {...column} />
            ))}
          </div>
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footerDescription}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad61ab9e2ee0fd9cea2a1dd39f9dd2c31642cdf2b45dd535b1879dbef34497a?placeholderIfAbsent=true&apiKey=00a3660157ba4b838569d3ec33bb80c8"
              alt="JELD-WEN Logo"
              className={styles.footerLogo}
            />
            <p className={styles.footerText}>
              A trusted brand in the Canadian building products industry,
              JELD-WEN is the only full line manufacturer of windows and doors
              with value and performance for every price point in the market.
            </p>
          </div>
          <div className={styles.socialLinks}>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
        <div className={styles.topBorder} />
        <div className={styles.footerBottom}>
          <div className={styles.footerLinks}>
            {footerLinks.map((link, index) => (
              <div key={index} className={styles.footerLink}>
                {link}
              </div>
            ))}
          </div>
          <div className={styles.copyright}>© 2022 JELD WEN, Inc.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
