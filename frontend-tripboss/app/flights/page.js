"use client";

import { fetchFlights } from '@/fetch/fetch-flights';
import { useState } from 'react';
import FlightsForm from '@/components/FlightsForm';
import FlightsList from '@/components/FlightsList';

export default function Flights() {
  const [flights, setFlights] = useState(null);

  const handleFlightsSearch = async (formData) => {
    try {
      let flights = await fetchFlights(formData)
      setFlights(flights)
    } catch (err) {
      // add proper error handling
      console.log(err);
    }
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trip Boss Application</h1>
      <FlightsForm onSubmit={handleFlightsSearch} />
      {flights !== null && <FlightsList flights={flights} />}
    </div>
  );
}
