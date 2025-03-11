import { flightSchema } from '../validations/flightsValidations.js';
import { getFlightsService } from '../services/flightsService.js';

export const getFlights = async (req, res) => {
  const result = flightSchema.safeParse(req.query);

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues.map((issue) => issue.message) });
  }

  const flights = await getFlightsService(result.data);

  res.status(200).json(flights);
};

