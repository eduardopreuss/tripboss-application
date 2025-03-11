
export const FlightList = ({ flights }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Price: ${flight.price}</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Departure:</p>
                <p className="font-medium">{flight.departure.airport} ({flight.departure.id})</p>
                <p className="text-sm text-gray-600">{new Date(flight.departure.dateTime).toLocaleString()}</p>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Arrival:</p>
                <p className="font-medium">{flight.arrival.airport} ({flight.arrival.id})</p>
                <p className="text-sm text-gray-600">{new Date(flight.arrival.dateTime).toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No flights available</p>
        )}
      </div>
    </div>
  );
};

export default FlightList;
