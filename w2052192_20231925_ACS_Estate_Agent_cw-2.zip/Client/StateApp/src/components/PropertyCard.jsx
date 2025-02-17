import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import { formatCurrency } from '../utils/formatCurrency';
import styles from '../styles/PropertyCard.module.css';

//Define the PropertyCard component and destructure the property prop
function PropertyCard({ property }) {
  //Extracting functions and state from the userFavourites hook to handle favoutite properties
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  //Function to toggle a property's favorite status
  const handleFavoriteToggle = () => {
    if (isFavorite(property.id)) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property);
    }
  };

  return (
    <div className={styles.propertyCard}>
      <img src={property.picture} alt={property.type} className={styles.propertyImage} />
      <div className={styles.propertyInfo}>
        <h3>{property.type} - {property.bedrooms} bedrooms</h3>
        <p>{property.location}</p>
        <p className={styles.price}>{formatCurrency(property.price)}</p>
        <div className={styles.actions}>
          <Link to={`/property/${property.id}`} className={styles.viewButton}>View Details</Link>
          <button
            onClick={handleFavoriteToggle}
            className={`${styles.favoriteButton} ${isFavorite(property.id) ? styles.favorited : ''}`}
          >
            {isFavorite(property.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

//Export the PropertyCard component as the default export
export default PropertyCard;