import { useState } from 'react';
import Link from 'next/link';
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showSearchInput = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>

        
        <div className={styles.menuItemsContainer}>          
          <Link href="/" className={styles.logo}>AEON</Link>
          <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/" className={styles.navLink}>Showcase</Link>
              <Link href="/" className={styles.navLink}>Docs</Link>
              <Link href="/" className={styles.navLink}>Blog</Link>
              <Link href="/" className={styles.navLink}>Analytics</Link>
              <Link href="/" className={styles.navLink}>Templates</Link>
              <Link href="/" className={styles.navLink}>Enterprise</Link>
          </div>
        </div>
        <div className={styles.searchInputWrapper}>
          <div className={`${styles.searchInputContainer} ${isVisible ? styles.showSearch : ''}`}>
              <input type="text" placeholder="Search documentation..." className={styles.searchInput} />
          </div>
          <div  className={styles.searchIconContainer}>
            <i className="fas fa-search" onClick={showSearchInput}></i>
          </div>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            {isOpen ? <span className={styles.closeIcon}>X</span> : <span className={styles.hamburgerIcon}>&#9776;</span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
