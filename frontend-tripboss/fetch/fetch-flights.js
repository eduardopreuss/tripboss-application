'use server'
const PATH = 'api/flights';

export async function fetchFlights(formData) {
  const queryParams = new URLSearchParams(formData).toString();
  const res = await fetch(`${process.env.FLIGHTSAPI}/${PATH}?${queryParams}`, {
    method: "GET",
  });

  if (!res.ok) throw new Error((await res.json()).message);

  return res.json();
}
