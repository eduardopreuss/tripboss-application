import { fetchFlights } from '../fetch/google/fetchFlights.js';
import { extractFlightData } from '../utils/extractFlightData.js';

export const getFlightsService = async (formData) => {

  // business logic could be added here

  let flightsData = await fetchFlights(formData)

  return [
    ...(flightsData.best_flights ? extractFlightData(flightsData.best_flights) : []),
    ...(flightsData.other_flights ? extractFlightData(flightsData.other_flights) : []),
  ]

}
