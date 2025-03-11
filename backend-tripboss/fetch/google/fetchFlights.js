
export const fetchFlights = async (formData) => {
  const params = new URLSearchParams({
    departure_id: formData.origin,
    arrival_id: formData.destination,
    outbound_date: formData.departureDate,
    return_date: formData.returnDate,
    api_key: process.env.SERPAPITOKEN,
  }).toString();
  const res = await fetch(`${process.env.FLIGHTSAPI}&${params}`, {
    method: "GET",
  });

  return res.json();
}
