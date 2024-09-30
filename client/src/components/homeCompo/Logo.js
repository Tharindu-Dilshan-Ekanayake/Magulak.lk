import React from 'react';
import LOGOB from '../../images/Black.png'; // Assuming this is your logo
import { FaWhatsapp } from 'react-icons/fa';

export default function CustomLogo() {
  return (
    <div className="flex flex-col items-center justify-center ">
      
      {/* Outer container with a fixed max width of 1280px */}
      <div className="w-full max-w-[1280px] px-4 bg-[#F7F3E8] pt-[60px] pb-[50px]">
        
        {/* Logo Section */}
        <div className="flex justify-center">
          <img src={LOGOB} alt="Logo" className="h-[400px] object-contain" />
        </div>

        {/* Quote Section */}
        <div className="mt-4 text-center">
          <p className="text-xl italic">“A happy marriage is a long conversation which always seems too short.”</p>
          <p className="mt-1 text-lg">—André Maurois</p>
        </div>

        {/* Text Section in Sinhala */}
        <div className="mt-4 text-lg text-center">
          <p>ගැලපෙන සහකාරියක් හෝ සහකරුවෙකු සොයාගැනීමට අප හා සම්බන්ද වන්න</p>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center mt-6">
          <a href="tel:0710821694" className="flex items-center justify-center px-4 py-3 text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500">
            <FaWhatsapp className="mr-2" /> 070 331 0180
          </a>
        </div>

      </div>
    </div>
  );
}
