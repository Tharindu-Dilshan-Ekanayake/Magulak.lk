import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MALE from '../../images/Male.png';
import { FaUser } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiBodyHeight } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { PiShoppingBagFill } from "react-icons/pi";
import PRO from '../../images/PRO LOGO.png'; // Import the PRO logo

export default function Proadd() {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const adsPerPage = 8;

    // Get pro ads
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

    // Calculate the ads to display for the current page
    const indexOfLastAd = currentPage * adsPerPage;
    const indexOfFirstAd = indexOfLastAd - adsPerPage;
    const currentAds = ads.slice(indexOfFirstAd, indexOfLastAd);

    // Calculate total pages
    const totalPages = Math.ceil(ads.length / adsPerPage);

    // Handle page change
    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>; // Show error message
    }
    
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="w-full max-w-[1280px] px-4 bg-[#F7F3E8] pt-[60px] pb-[50px] flex justify-center">
                {currentAds.length > 0 ? (
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Pro Advertisements</h2>
                        {currentAds.map((ad, index) => (
                            <div key={index} className="relative mt-4 rounded-md shadow-md bg-[#F5E9C8] flex items-start justify-between pt-4 pb-4 w-[800px] pl-8">
                                <img src={PRO} alt='PRO Logo' className='absolute w-auto h-10 top-2 right-2' /> {/* Positioning logo in the top right corner */}
                                <div>
                                    <img src={MALE} alt='Profile' className='h-[250px] w-[250px] rounded-md object-cover' />
                                </div>
                                <div className='flex-grow pl-12 text-start'>
                                    <div className='flex items-center mb-2'>
                                        <FaUser className="mr-2 text-blue-600" />
                                        <h3 className="text-lg font-bold">{`${ad.first_name} ${ad.last_name}`}</h3>
                                    </div>
                                    <div className='flex items-center mb-2'>
                                        <FaCity className="mr-2 text-green-600" />
                                        <p>{ad.city}</p>
                                    </div>
                                    <div className='flex items-center mb-2'>
                                        <PiShoppingBagFill className="mr-2 text-orange-600" />
                                        <p>{ad.job}</p>
                                    </div>
                                    <div className='flex items-center mb-2'>
                                        <LiaBirthdayCakeSolid className="mr-2 text-red-600" />
                                        <p>{ad.age} years</p>
                                    </div>
                                    <div className='flex items-center mb-4'>
                                        <GiBodyHeight className="mr-2 text-purple-600" />
                                        <p>{ad.height} cm</p>
                                    </div>
                                    <button className='h-10 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500 w-[100px] mt-6'>
                                        View more
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-between mt-4">
                            <button 
                                onClick={() => handlePageChange('prev')} 
                                disabled={currentPage === 1} 
                                className='px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50'
                            >
                                Previous
                            </button>
                            <span>{`Page ${currentPage} of ${totalPages}`}</span>
                            <button 
                                onClick={() => handlePageChange('next')} 
                                disabled={currentPage === totalPages} 
                                className='px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50'
                            >
                                Next
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>No pro advertisements available.</p>
                )}
            </div>
        </div>
    );
}
