import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useFavorites } from '../hooks/useFavorites';
import { formatCurrency } from '../utils/formatCurrency';
import propertiesData from '../data/properties.json';
import styles from '../styles/PropertyDetails.module.css';


function PropertyDetails() {
  const { id } = useParams(); //Extract the property ID from the URL parameters
  const property = propertiesData.properties.find((p) => p.id === id); //Find the property by ID in the data
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites(); //Destructure favorite management functions from the custom hook

  // Check if the property exists , return fallback if not found
  if (!property) {
    return <div>Property not found</div>;
  }

 //Define an array of images for the ImageGallery component

 const images = [
  {
    original: '/images/property-main.jpg', // Path to the original image
    thumbnail: '/images/property-main.jpg', // Path to the thumbnail image
    originalAlt: 'Main property image1', //Alt text for accessibility
    thumbnailAlt: 'Thumbnail of main property image1', //Alt text for thumbnail
  },
  {
    original: '/images/property-extra1.jpg', 
    thumbnail: '/images/property-extra1.jpg', 
    originalAlt: 'Main property image2',
    thumbnailAlt: 'Thumbnail of main property image2',
  },
  {
    original: '/images/property-extra2.jpg', 
    thumbnail: '/images/property-extra2.jpg', 
    originalAlt: 'Main property image3',
    thumbnailAlt: 'Thumbnail of main property image3',
  },
  {
    original: '/images/property-extra3.jpg', 
    thumbnail: '/images/property-extra3.jpg', 
    originalAlt: 'Main property image4',
    thumbnailAlt: 'Thumbnail of main property image4',
  },
  {
    original: '/images/property-extra4.jpg', 
    thumbnail: '/images/property-extra4.jpg', 
    originalAlt: 'Main property image5',
    thumbnailAlt: 'Thumbnail of main property image5',
  },
  {
    original: '/images/property-extra5.jpg', 
    thumbnail: '/images/property-extra5.jpg', 
    originalAlt: 'Main property image6',
    thumbnailAlt: 'Thumbnail of main property image6',
  },
  {
    original: '/images/property-extra6.jpg', 
    thumbnail: '/images/property-extra6.jpg', 
    originalAlt: 'Main property image7',
    thumbnailAlt: 'Thumbnail of main property image7',
  },
  {
    original: '/images/property-extra7.jpg', 
    thumbnail: '/images/property-extra7.jpg', 
    originalAlt: 'Main property image8',
    thumbnailAlt: 'Thumbnail of main property image8',
  },

];

//Toggle favorite status of the property
  const handleFavoriteToggle = () => {
    if (isFavorite(property.id)) {
      removeFromFavorites(property.id); //Remove from favorites if already a favorite
    } else {
      addToFavorites(property); //Add to favorites if not a favorite
    }
  };

  return (
    <div className={styles.propertyDetails}>
      <h2>{property.type} - {property.bedrooms} bedrooms</h2>
      { <ImageGallery items={images} /> }
      <div className={styles.propertyInfo}>
        <p className={styles.price}>{formatCurrency(property.price)}</p>
        <p>{property.location}</p>
        <button
          onClick={handleFavoriteToggle}
          className={`${styles.favoriteButton} ${isFavorite(property.id) ? styles.favorited : ''}`}
        >
          {isFavorite(property.id) ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>
        <TabPanel>
          <p>{property.description}</p>
        </TabPanel>
        <TabPanel>
          <img src="/floor-plan-placeholder.jpg" alt="Floor Plan" className={styles.floorPlan} />
        </TabPanel>
        <TabPanel>
  <iframe
    title="Google Map"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d578.6021947151654!2d79.89252634861009!3d6.859605223585713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1735961248503!5m2!1sen!2slk"
  ></iframe>
</TabPanel>

      </Tabs>
    </div>
  );
}

export default PropertyDetails; //Export the component for use in other parts of the application