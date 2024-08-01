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

  - **Auth endpoints**

  ```
  POST /api/auth
  ```

  Create new user.

  Response:

  ```json
  [
    {
   
  "name": "Mo Gamal",
  "email": "engmogamil@gmail.com",
  "password": "123456"

  }

  ]
  ```

  - **Booking endpoints**

  ```
  POST /api/bookings-flight
  ```

  Create new booking flight.

  Response:

  ```json
  [
    {
   "flightId": "66ab205dfed76aeb0354700a",
  "userId": "66ab294ee1d510efe2f7ef0f",
  "seatNumber": 4,
  "bookingDate": "2024-08-01T06:28:21.615Z"
  }

  ]
  ```