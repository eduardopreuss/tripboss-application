import { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import Label from './ui/Label';

export default function FlightsForm({ onSubmit }) {
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);

  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div>
        <Label htmlFor="origin">Origin</Label>
        <Input
          id="origin"
          name="origin"
          placeholder="Airport code (e.g., CDG, AUS)"
          value={form.origin}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="destination">Destination</Label>
        <Input
          id="destination"
          name="destination"
          placeholder="Airport code (e.g., CDG, AUS)"
          value={form.destination}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="departureDate">Departure Date</Label>
        <Input
          id="departureDate"
          type="date"
          name="departureDate"
          value={form.departureDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="returnDate">Return Date</Label>
        <Input
          id="returnDate"
          type="date"
          name="returnDate"
          value={form.returnDate}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" classNames='bg-blue-500'>Show Flights</Button>
    </form>
  );
}
