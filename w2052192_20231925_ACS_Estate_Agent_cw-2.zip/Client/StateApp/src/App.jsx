import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SearchForm from './components/SearchForm';
import PropertyDetails from './components/PropertyDetails';
import { FavoritesProvider } from './hooks/useFavorites';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Layout>
          <Routes> {/*Routes container defines the application's route paths*/}
            <Route exact path="/" element={<SearchForm/>} /> {/*Define the root path ("/") to render the SearchForm component*/}
            <Route path="/property/:id" element={<PropertyDetails/>} /> {/*Defines a dynamic route ("/property/:id") to render the PropertyDetals component for specific property IDs */} 
          </Routes>
        </Layout>
      </Router>
    </FavoritesProvider>
  );
}

//Exporting the App component as the default export
export default App;