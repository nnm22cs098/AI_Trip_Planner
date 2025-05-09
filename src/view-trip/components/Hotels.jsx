
import React from "react";
import HotelCardItem from "./HotelCardItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hotels({ trip }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-4xl font-bold text-center mb-8">
        Hotel Recommendations
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <div
            key={index}
            className="p-2 hover:scale-105 transition-all cursor-pointer"
          >
            <HotelCardItem h={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
}



export default Hotels;
