import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import { MyResearchs } from '@/types';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import CardSlide from '../CardSlide/CardSlide';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Typography } from '@mui/material';

interface CarouselProps {
  slides: Array<MyResearchs>;
  slidesToShow?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, slidesToShow = 3 }) => {
  const [numSlidesToShow, setNumSlidesToShow] = useState(slidesToShow);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  const goNext = () => {
    if (currentIndex < slides.length - numSlidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setNumSlidesToShow(
      windowSize < 500 ? 1 : windowSize < 750 ? 2 : slidesToShow,
    );
  }, [windowSize]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.headerCarousel}>
        <Typography variant="h6">Minhas Pesquisas</Typography>
        <div className={styles.actionContainer}>
          <button
            disabled={currentIndex === 0}
            onClick={goPrev}
            className={`btn btn-secondary ${styles.mobileLeftArrow}`}
          >
            <NavigateBeforeRoundedIcon />
          </button>
          <button
            disabled={currentIndex === slides.length - numSlidesToShow}
            onClick={goNext}
            className={`btn btn-secondary ${styles.mobileRightArrow}`}
          >
            <NavigateNextRoundedIcon />
          </button>
        </div>
      </div>
      <div className={styles.carousel}>
        <button
          disabled={currentIndex === 0}
          onClick={goPrev}
          className={`btn btn-secondary ${styles.leftArrow}`}
        >
          <NavigateBeforeRoundedIcon />
        </button>
        <div className={styles.slideContainer}>
          <div
            className={styles.slide}
            style={{
              width: `${slides.length * (100 / numSlidesToShow)}%`,
              transform: `translateX(-${currentIndex * (100 / (slides.length - (numSlidesToShow === 1 ? 0 : 0.07)))}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <CardSlide
                key={`${slide.id}-${index}`}
                slide={slide}
                slidesToShow={numSlidesToShow}
              />
            ))}
          </div>
        </div>
        {currentIndex < slides.length - numSlidesToShow && (
          <button
            onClick={goNext}
            className={`btn btn-secondary ${styles.rightArrow}`}
          >
            <NavigateNextRoundedIcon />
          </button>
        )}
        {windowSize >= 1920 && (
          <button
            type="button"
            className={`btn btn-secondary ${styles.rightBtnArrow}`}
          >
            <div>
              Ver todas
              <EastRoundedIcon />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
