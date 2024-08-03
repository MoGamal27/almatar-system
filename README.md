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

  Create new booking payment flight.

  Request:

  ```json
  [
    {
   "flightId": "66ab205dfed76aeb0354700a",
  "userId": "66ab294ee1d510efe2f7ef0f",
  "seatNumber": 4,
  "paymentMethodId": "pm_card_visa",
  "bookingDate": "2024-08-01T06:28:21.615Z"
  }

  ]
  ```

  Response:

  ```json
  [
    {
  "success": true,
  "bookingId": "BOOKING_ID",
  "paymentIntentId": "PAYMENT_INTENT_ID",
  "status": "succeeded"
  }

  ]
  ```

  ```
  GET /api/bookings-flight
  ```

  Retrieve Payment details.

  Request:

  ```json
  [
    {
   "bookingId": "BOOKING_ID",
  "flightNumber": "FLIGHT_NUMBER",
  "amount": AMOUNT_IN_DOLLARS,
  "status": "succeeded",
  "bookingDate": "TIMESTAMP"
  }

  ]
  ```



  - **Search endpoints**

  ```
  GET /api/search-flights
  ```

  Retrieve flight based on departure airport, arrival airport, and date.

  Request:

  ```json
  [
    {
   "departureAirport":"Egypt",
  "arrivalAirport":"Qatar",
  "date":"2024-07-10T08:00:00Z"
  }

  ]
  ```

  Response:

  ```json
  [
    {
   "_id": "66ab205dfed76aeb0354700a",
    "flightNumber": "1",
    "airline": "Qatar Airways",
    "departureAirport": "Egypt",
    "arrivalAirport": "Qatar",
    "departureTime": "2024-07-10T08:00:00.000Z",
    "arrivalTime": "2024-07-10T14:00:00.000Z",
    "price": 500,
    "availableSeats": 150,
  }

  ]
  ```

 ```
  GET /api/search-flights-prices
  ```

 Retrieve flight prices based on departure airport, arrival airport, and date.

  Request:

  ```query Parameters
     from=Egypt&to=QatarK&date=2024-07-10
  ```

  Response:

  ```json
  [
    {
   "_id": "66ab205dfed76aeb0354700a",
    "flightNumber": "1",
    "airline": "Qatar Airways",
    "departureAirport": "Egypt",
    "arrivalAirport": "Qatar",
    "departureTime": "2024-07-10T08:00:00.000Z",
    "arrivalTime": "2024-07-10T14:00:00.000Z",
    "price": 500,
    "availableSeats": 150,
  }

  ]
  ```

```
  GET /api/search-flights-availability
  ```

 Retrieve flight availability based on departure airport, arrival airport, and date.

  Request:

  ```query Parameters
     flightNumber=1&date=2024-07-10
  ```

  Response:

  ```json
  [
    {
   "_id": "66ab205dfed76aeb0354700a",
    "flightNumber": "1",
    "airline": "Qatar Airways",
    "departureAirport": "Egypt",
    "arrivalAirport": "Qatar",
    "departureTime": "2024-07-10T08:00:00.000Z",
    "arrivalTime": "2024-07-10T14:00:00.000Z",
    "price": 500,
    "availableSeats": 150,
  }

  ]
  ```

