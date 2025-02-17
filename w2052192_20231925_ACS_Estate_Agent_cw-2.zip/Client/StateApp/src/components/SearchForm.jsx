import React, { useState } from 'react';
import PropertyList from './PropertyList';
import propertiesData from '../data/properties.json';
import styles from '../styles/SearchForm.module.css';

//Define the SearchForm component
function SearchForm() {
  const [searchCriteria, setSearchCriteria] = useState({ //Initialize the search criteria state object
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAdded: '',
    postcode: '',
  });

  //Initialize the search results state with the properties data
  const [searchResults, setSearchResults] = useState(propertiesData.properties);

  const handleChange = (e) => { //Function to handle form input changes
    const { name, value } = e.target; //Extract the name and value form the input element
    setSearchCriteria({ ...searchCriteria, [name]: value }); //Update the search criteria state
  };

  //Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent the form from submitting and refreshing the page
    const results = propertiesData.properties.filter((property) => { //Filter properties based on search criteria
      return (
        (!searchCriteria.type || property.type === searchCriteria.type) &&  //Check if the property type matches the search criteria
        (!searchCriteria.minPrice || property.price >= parseInt(searchCriteria.minPrice)) &&  //Check if the property price is greater than or equal to the min price
        (!searchCriteria.maxPrice || property.price <= parseInt(searchCriteria.maxPrice)) && //Check if the property price is less than or eqaul to the max price
        (!searchCriteria.minBedrooms || property.bedrooms >= parseInt(searchCriteria.minBedrooms)) && //Check if the property has more bedrooms than the min bedrooms
        (!searchCriteria.maxBedrooms || property.bedrooms <= parseInt(searchCriteria.maxBedrooms)) && //Check if the property has fewer bedrooms that the max bedrooms
        (!searchCriteria.dateAdded || new Date(property.added.year, property.added.month - 1, property.added.day) >= new Date(searchCriteria.dateAdded)) && //Filter properties added after the specified date
        (!searchCriteria.postcode || property.location.toLowerCase().includes(searchCriteria.postcode.toLowerCase())) //Check if the property location includes the postcode
      );
    });
    setSearchResults(results); //Update the search results with the filtered properties
  };

  return (
    <div className={styles.searchForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}> 
          <label htmlFor="type">Property Type:</label>
          <select name="type" id="type" value={searchCriteria.type} onChange={handleChange}>
           
           //Option for any property type, house and flat
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={searchCriteria.minPrice}
            onChange={handleChange} //Input for minimum price , updates search criteria on change
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={searchCriteria.maxPrice}
            onChange={handleChange} //Input for maximum price, updates search criteria on change
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="minBedrooms">Min Bedrooms:</label>
          <input
            type="number"
            id="minBedrooms"
            name="minBedrooms"
            value={searchCriteria.minBedrooms}
            onChange={handleChange} //Input for minimum bedrooms, updates search criteria on change
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="maxBedrooms">Max Bedrooms:</label>
          <input
            type="number"
            id="maxBedrooms"
            name="maxBedrooms"
            value={searchCriteria.maxBedrooms}
            onChange={handleChange} //Input for maximum bedrooms, updates search criteria on change
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="dateAdded">Added After:</label>
          <input
            type="date"
            id="dateAdded"
            name="dateAdded"
            value={searchCriteria.dateAdded}
            onChange={handleChange}  //Input for date added, updates search criteria on change
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="postcode">Postcode Area:</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={searchCriteria.postcode}
            onChange={handleChange} //Input for postcode area , updates search criteria on change
          />
        </div>
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
      <PropertyList properties={searchResults} /> 
    </div>
  );
}

//Export the SearchForm component as the default export
export default SearchForm; 