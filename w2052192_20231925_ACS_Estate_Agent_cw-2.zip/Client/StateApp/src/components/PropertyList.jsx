import React from 'react';
import PropertyCard from './PropertyCard';
import styles from '../styles/PropertyList.module.css';

function PropertyList({ properties }) { //Define the PropertyList compenent, recieving the properties as a prop
  return (
    <div className={styles.propertyList}>
      {properties.length > 0 ? properties.map((property) => ( //Check if there are properties to display
        <PropertyCard key={property.id} property={property} /> //Map through the properties and render a PropertyCard for each
      )) : <div>No properties found</div>}
    </div>
  );
}
//Export the PropertyList component as the default export
export default PropertyList;