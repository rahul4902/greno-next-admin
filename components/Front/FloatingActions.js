'use client'
import { Phone, MessageCircle } from 'lucide-react';
import Button from 'react-bootstrap/Button';
import styles from './FloatingActions.module.css';

const FloatingActions = ({handleCallback}) => {
  return (
    <div className={styles.fabContainer}>
      {/* WhatsApp Button */}
      <Button
        variant="success"
        className={styles.fabButton}
        href="https://api.whatsapp.com/send/?phone=919958747295&text=Hi&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={20} />
        <span className={styles.fabTooltip}>Chat on WhatsApp</span>
      </Button>

      {/* Call Back Button */}
      <Button
        variant="primary"
        className={styles.fabButton}
        onClick={()=>{ handleCallback(true) }}
      >
        <Phone size={20} />
        <span className={styles.fabTooltip}>Request Call Back</span>
      </Button>
    </div>
  );
};

export default FloatingActions;