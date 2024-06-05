import React from 'react';
import styles from './CardNotification.module.scss';
import { Notification } from '@/types';
import ChatIcon from '@mui/icons-material/Chat';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

interface CardNotification {
  notification: Notification;
  key?: string;
}

const CardNotification: React.FC<CardNotification> = ({
  key = 'key',
  notification,
}) => {
  return (
    <div key={key} className={styles.card}>
      <div className={styles.notificationCard}>
        {!notification.read && <div className={styles.bullet} />}
        <div className={styles.title}>
          <ChatIcon />
          <span>
            {notification.comments}{' '}
            {notification.comments <= 1
              ? 'novo comentário'
              : 'novos comentários'}
          </span>
        </div>
        <div className={styles.infoContainer}>
          <span
            dangerouslySetInnerHTML={{
              __html: notification.mensage,
            }}
          />
          <button type="button" className="btn btn-secondary">
            <EastRoundedIcon />
          </button>
        </div>
      </div>
      <div className={styles.lineBar} />
    </div>
  );
};

export default CardNotification;
