import { z } from "zod";

export const flightSchema = z.object({
  origin: z.string().min(1, "Origin is required"),
  destination: z.string().min(1, "Destination is required"),
  departureDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Departure Date must be a valid date",
  }),
  returnDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Return Date must be a valid date",
  }),
});
