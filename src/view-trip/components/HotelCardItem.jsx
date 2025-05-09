import { PHOTO_REF_URL } from "@/constants/options";
import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const HotelCardItem = ({ h }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    h && GetPlacePhoto();
  }, [h]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: h?.name,
    };
    try {
      const resp = await GetPlaceDetails(data);
      const photoName = resp.data.places[0].photos[0]?.name;
      const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
      setPhotoUrl(PhotoUrl);
    } catch (error) {
      console.error("Error fetching hotel photo:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden max-w-lg">
  <Link
    to={
      "https://www.google.com/maps/search/?api=1&query=" +
      h?.name +
      ", " +
      h?.address
    }
    target="_blank"
  >
    <img
      className="w-full h-64 object-cover"
      src={photoUrl}
      alt={h?.name}
    />
    <div className="p-5">
      <div className="text-xl font-semibold mb-2">{h.name}</div>
      <div className="flex items-center text-base text-gray-700 mb-2">
        <CiStar className="text-yellow-500 mr-1" />
        {h.rating}
      </div>
      <div className="text-base text-gray-600">{h.address}</div>
    </div>
  </Link>
</div>

  );
};

export default HotelCardItem;
