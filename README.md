# almatar-system
 The Flight and Search Service manages flight information and provides flight search functionality in the Flight Booking System.

## API Endpoints

- **Get all flights**

  ```
  GET /api/flights
  ```

  Retrieves a list of all available flights.

  Response:

  ```json
  [
    {
    "flightNumber": "1",
    "airline": "Qatar Airways",
    "departureAirport": "Egypt",
    "arrivalAirport": "Qatar",
    "departureTime": "2024-07-10T08:00:00Z",
    "arrivalTime": "2024-07-10T14:00:00Z",
    "price": 500,
    "availableSeats": 150
  }

  ]
  ```