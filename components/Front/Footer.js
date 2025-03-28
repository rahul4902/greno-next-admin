import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight, Mail, MapPin, Phone, Twitter, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Container className={styles.footerContent}>
        <Row className={styles.footerGrid}>
          {/* Links Section */}
          <Col md={4} className={styles.footerSection}>
            <h3 className={styles.footerHeading}>
              <span className={styles.footerIcon}>→</span>
              Quick Links
            </h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a href="/about" className={styles.footerLink}>
                  <ArrowRight size={14} className={styles.footerLinkIcon} />
                  About Us
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="/services" className={styles.footerLink}>
                  <ArrowRight size={14} className={styles.footerLinkIcon} />
                  Services
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="/insights" className={styles.footerLink}>
                  <ArrowRight size={14} className={styles.footerLinkIcon} />
                  Insights
                </a>
              </li>
            </ul>
          </Col>

          {/* News Section */}
          <Col md={4} className={styles.footerSection}>
            <h3 className={styles.footerHeading}>📰 Company News</h3>
            <div className={styles.footerNews}>
              <p className={styles.footerNewsText}>
                Crafting digital experiences that inspire and transform businesses through innovation.
              </p>
            </div>
          </Col>

          {/* Contact Section */}
          <Col md={4} className={styles.footerSection}>
            <h3 className={styles.footerHeading}>📞 Contact Info</h3>
            <div className={styles.footerContacts}>
              <div className={styles.footerContactItem}>
                <MapPin size={16} className={styles.footerContactIcon} />
                <span>Silicon Valley, CA</span>
              </div>
              <div className={styles.footerContactItem}>
                <Mail size={16} className={styles.footerContactIcon} />
                <span>contact@nexus.io</span>
              </div>
              <div className={styles.footerContactItem}>
                <Phone size={16} className={styles.footerContactIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className={styles.footerSocials}>
              <a href="#" className={styles.footerSocialLink}>
                <Twitter size={18} />
              </a>
              <a href="#" className={styles.footerSocialLink}>
                <Linkedin size={18} />
              </a>
            </div>
          </Col>
        </Row>

        <div className={styles.footerDivider}></div>

        <div className={styles.footerLegal}>
          <span>© 2025 Nexus Technologies</span>
          <div className={styles.footerLegalLinks}>
            <a href="/terms" className={styles.footerLegalLink}>Terms of Service</a>
            <a href="/privacy" className={styles.footerLegalLink}>Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;