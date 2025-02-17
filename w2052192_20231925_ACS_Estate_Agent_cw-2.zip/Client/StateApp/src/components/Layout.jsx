import React from 'react';
import FavoritesList from './FavoritesList';
import styles from '../styles/Layout.module.css';


//Defining the Layout component and destructuring the "children" prop to render nested components
function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Estate Agent Web Application</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <FavoritesList />
    </div>
  );
}

export default Layout; //Exporting the Layout component as the default export