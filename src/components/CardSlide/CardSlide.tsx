import React from 'react';
import styles from './CardSlide.module.scss';
import { MyResearchs } from '@/types';
import { Typography } from '@mui/material';
import DraftIcon from '../../../public/images/draft-icon.svg';

interface CardNotification {
  slidesToShow: number;
  slide: MyResearchs;
  key?: string;
}

const CardSlide: React.FC<CardNotification> = ({
  key = 'key',
  slide,
  slidesToShow,
}) => {
  return (
    <div
      className={styles.slideItem}
      key={key}
      style={{ width: `${100 / slidesToShow}%` }}
    >
      <div className={styles.cardSlide}>
        {slide.status.toLowerCase() !== 'rascunho' && (
          <div className={styles.bullet} />
        )}
        <div className={styles.headerCard}>
          <Typography variant="h6">
            {slide.status}
            {slide.status.toLowerCase() === 'rascunho' && <DraftIcon />}
          </Typography>
          <p
            className={
              slide.status.toLowerCase() === 'rascunho' ? styles.draft : ''
            }
          >
            {slide.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSlide;
