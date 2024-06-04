import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import TeamContainer from '../TeamContainer/TeamContainer';
import { Divider, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useState } from 'react';

const menuOptions = [
  { title: 'Pesquisas', href: '/' },
  { title: 'Créditos', href: '/' },
  { title: 'Campanhas', href: '/' },
  { title: 'Equipe', href: '/' },
  { title: 'Configurações', href: '/' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <Image
          src={'/images/logo.svg'}
          alt="Logo On The Go"
          width={36}
          height={36}
        />
        <IconButton
          className={styles.menuIcon}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          {!mobileOpen ? <MenuIcon /> : <CloseRoundedIcon />}
        </IconButton>
        <div className={styles.menuContainer}>
          {menuOptions.map((option, index) => (
            <Link
              href={option.href}
              title={option.title}
              key={`desktop-${index}`}
            >
              {option.title}
            </Link>
          ))}
        </div>
      </nav>
      <div className={styles.teamsUserContainer}>
        <TeamContainer
          logoSrc="/images/logo-dark.svg"
          name="ACME Corporation"
        />
        <div className={styles.userContainer}>
          <span>Adriano Lima</span>
          <span>adriano.lima@acmecorp.com</span>
        </div>
        <MoreVertRoundedIcon />
      </div>
      <IconButton
        className={styles.notificationIconBtn}
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <div className={styles.bulletNotification} />
        <NotificationsRoundedIcon />
      </IconButton>
      <Drawer
        className="drawerMenu"
        variant="temporary"
        anchor="top"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <TeamContainer
          mobile
          logoSrc="/images/logo-dark.svg"
          name="ACME Corporation"
        />
        <Divider />
        {menuOptions.map((option, index) => (
          <>
            <Link
              href={option.href}
              title={option.title}
              key={`desktop-${index}`}
              className="menu-option"
            >
              {option.title}
            </Link>
            <Divider />
          </>
        ))}
        <div className="user-container">
          <div className="user-detail">
            <span>Adriano Lima</span>
            <span>adriano.lima@acmecorp.com</span>
          </div>

          <Divider />
          <Link href="/" title="Logout">
            Logout
          </Link>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
