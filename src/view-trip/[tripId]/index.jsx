import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  // Import useNavigate
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import Itinerary from "../components/Itinerary";

const ViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null); // Change from [] to null for better handling
  const navigate = useNavigate(); // Hook for navigation

  // Logic to get trip info from Firebase
  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document: ", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document");
      toast("No trip found");
    }
  };

  useEffect(() => {
    GetTripData();
  }, [tripId]);

  if (!trip) return <div className="p-4">Loading trip details...</div>;

 

  return (
    <div className="w-full min-h-screen px-4 py-6 space-y-6">
      {/* Information Section */}
      <InfoSection trip={trip} />

      {/* 🏨 Recommended Hotels */}
      <Hotels trip={trip} />

      {/* 🗺️ Daily Plan / Itinerary */}
      <Itinerary trip={trip} />

    
    </div>
  );
};

export default ViewTrip;
