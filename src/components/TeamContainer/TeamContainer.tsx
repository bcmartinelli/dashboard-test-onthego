import React from 'react';
import styles from './TeamContainer.module.scss';

interface TeamContainerProps {
  mobile?: boolean;
  logoSrc: string;
  name: string;
}

const TeamContainer: React.FC<TeamContainerProps> = ({
  logoSrc,
  name,
  mobile = false,
}) => {
  return (
    <div className={`${styles.container} ${mobile ? styles.mobile : ''}`}>
      <div className={styles.logo}>
        <img src={logoSrc} alt="Team Logo" />
      </div>
      <div className={styles.text}>{name}</div>
    </div>
  );
};

export default TeamContainer;
