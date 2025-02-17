import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import { formatCurrency } from '../utils/formatCurrency';
import styles from '../styles/FavoritesList.module.css';

//Defining the FavoritesList component
function FavoritesList() {
  //Extracting favorite properties and functions to remove and clear favorites from the userFavorites hook
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();

  return (
    <div className={styles.favoritesList}>
      <h3>Favorites</h3>
      {favorites.map((property) => (
        <div key={property.id} className={styles.favoriteItem}>
          <img src={property.picture} alt={property.type} className={styles.favoriteImage} />
          <div className={styles.favoriteInfo}>
            <h4>{property.type} - {property.bedrooms} bedrooms</h4>
            <p>{formatCurrency(property.price)}</p>
            <Link to={`/property/${property.id}`}>View Details</Link>
            <button onClick={() => removeFromFavorites(property.id)}>Remove</button>
          </div>
        </div>
      ))}
      {favorites.length > 0 && (
        <button onClick={clearFavorites} className={styles.clearButton}>Clear All</button>
      )}
    </div>
  );
}

export default FavoritesList; //Exporting the FavoritesList component as the default export