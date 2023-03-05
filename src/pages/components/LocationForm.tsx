import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface LocationFormProps {
  onFormSubmit: (location: string, fromDate: Date, toDate: Date) => void;
}

const LocationForm: React.FC<LocationFormProps> = ({ onFormSubmit }) => {
  const [location, setLocation] = useState<string>("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (location && fromDate && toDate) {
      onFormSubmit(location, fromDate, toDate);
    }
  };

  return (
    <div className="mt-4">
    <form onSubmit={handleSubmit}>
      <label
        className="text-2xl ml-2 my-2"
        htmlFor="location">
          Location :
      </label>
      <input
        className="text-xl ml-2"
        aria-autocomplete="list"
        aria-aria-labelledby="searchFormLocationTypeahead-label"
        autocomplete="on"
        placeholder="City, state or address"
        data-testid="searchInput"
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <label
        className=""
        htmlFor="fromDate">
          From Date:
      </label>
      <DatePicker
        selected={fromDate}
        onChange={(date) => setFromDate(date)}
        selectsStart
        startDate={fromDate}
        endDate={toDate}
        required
      />
      <label
        className=""
        htmlFor="toDate">To Date:</label>
      <DatePicker
        selected={toDate}
        onChange={(date) => setToDate(date)}
        selectsEnd
        startDate={fromDate}
        endDate={toDate}
        minDate={fromDate}
        required
      />
      <button
        className=" "
        type="submit">
          Submit
      </button>
    </form>
    </div>
  );
};

export default LocationForm;
