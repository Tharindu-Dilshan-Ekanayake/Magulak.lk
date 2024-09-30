import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MALE from '../../images/Male.png'


export default function Proadd() {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   //get pro adds
   const getproadds = async () => {
    try {
        const response = await axios.get('/add/getproadd');
        setAds(response.data.data);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching pro ads', error);
        setError('Failed to load pro ads');
        setLoading(false);
    }
   };
   
   useEffect(() => {
    getproadds();
   }, []);
   
   if (loading) {
    return <div>Loading...</div>;
   }
   if (error) {
    return <div>{error}</div>; // Show error message
  }
  return (
    <div className="flex flex-col items-center justify-center ">
        
      <div className="w-full max-w-[1280px] px-4 bg-[#F7F3E8] pt-[60px] pb-[50px] flex justify-center">
        
        {ads.length > 0 ? (
          <div className="">
             <h2>Pro Advertisements</h2>
            {ads.map((ad, index) => (
              <div key={index} className="mt-4 rounded-md shadow-md bg-[#F5E9C8] flex items-center justify-center pt-4 pb-4 w-[800px]">
               
                <div>
                    <img src={MALE} alt='hi' className='h-[250px]'></img>
                </div>
                <div className='pl-12 text-start'>
                    <h3 className="text-lg font-bold">{`${ad.first_name} ${ad.last_name}`}</h3>
                    <p><strong>City:</strong> {ad.city}</p>
                    <p><strong>Job:</strong> {ad.job}</p>
                    <p><strong>Age:</strong> {ad.age}</p>
                    <p><strong>Height:</strong> {ad.height}</p>
                    
                    <button className='h-10 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500 w-[100px] mt-6'>View more</button>
                </div>
                
                
              </div>
            ))}
          </div>
        ) : (
          <p>No pro advertisements available.</p>
        )}
      </div>
    </div>
  )
}
