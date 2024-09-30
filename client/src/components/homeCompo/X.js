import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Proadd() {
  const [ads, setAds] = useState([]); // State to hold the pro ads
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch pro ads from the backend
  const getproadds = async () => {
    try {
      const response = await axios.get('/api/ads/pro'); // Make sure the route matches your backend API
      setAds(response.data.data); // Assuming the data is in response.data.data
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching pro ads', error);
      setError('Failed to load pro ads');
      setLoading(false);
    }
  };

  // Call the getproadds function on component mount
  useEffect(() => {
    getproadds();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-[1280px] px-4 bg-[#F7F3E8] pt-[60px] pb-[50px]">
        {/* Display ads */}
        <h2 className="mb-4 text-2xl">Pro Advertisements</h2>
        {ads.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ads.map((ad, index) => (
              <div key={index} className="p-4 bg-white rounded-md shadow-md">
                <h3 className="text-lg font-bold">{`${ad.first_name} ${ad.last_name}`}</h3>
                <p><strong>City:</strong> {ad.city}</p>
                <p><strong>Job:</strong> {ad.job}</p>
                <p><strong>Age:</strong> {ad.age}</p>
                <p><strong>Height:</strong> {ad.height}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No pro advertisements available.</p>
        )}
      </div>
    </div>
  );
}
