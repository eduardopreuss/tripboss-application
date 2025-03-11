export const extractFlightData = (flights) => {
  return flights.map((flight) => ({
    price: flight.price,
    departure: {
      airport: flight.flights[0].departure_airport.name,
      id: flight.flights[0].departure_airport.id,
      dateTime: flight.flights[0].departure_airport.time,
    },
    arrival: {
      airport: flight.flights[flight.flights.length - 1].arrival_airport.name,
      id: flight.flights[flight.flights.length - 1].arrival_airport.id,
      dateTime: flight.flights[flight.flights.length - 1].arrival_airport.time,
    },
  }));
};
