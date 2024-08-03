# Almatar System
The Almatar System is a comprehensive flight and hotel booking platform that offers a seamless booking experience for users. The system includes features for flight and hotel booking, user authentication, payment processing, search and filtering, user profile management, notifications, and an admin panel.

## Features

### 1. Flight Booking

- Search for flights (one-way, round-trip, multi-city)
- View flight prices and availability
- Book flights
- Manage flight bookings (view, cancel, modify)
- Flight price alerts

### 2. Hotel Booking

- Search for hotels by location, dates, and amenities
- View hotel details, room types, and prices
- Book hotel rooms
- Manage hotel bookings (view, cancel, modify)
- Hotel reviews and ratings

### 3. User Authentication

- User registration and login
- JWT (JSON Web Token) authentication
- OAuth integration with Google for easy sign-in

### 4. Payment Processing

- Secure payment processing using Stripe
- Support for multiple currencies
- Refund processing

### 5. Search and Filters

- Advanced search options for flights and hotels
- Filter results by price, airline, hotel star rating, amenities, etc.
- Sort results by various criteria (price, duration, rating)

### 6. User Profile

- View and edit user information
- Save favorite flights and hotels
- View booking history

### 7. Notifications

- Email notifications for booking confirmations, reminders, and updates
- Push notifications for mobile app users

### 8. Admin Panel

- Manage flights, hotels, and bookings
- View analytics and reports
- User management

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

 - **Travel endpoints**

  ```
  POST /api/travel/round-trip-flight
  ```

  Create round trip flight

  Request:

  ```json
  [
    {
   "from":"Egypt",
  "to":"Qatar",
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
  POST /api/travel/one-way-flight
  ```

  Create one way flight

  Request:

  ```json
  [
    {
   "from":"Egypt",
  "to":"Qatar",
  "departdate":"2024-07-10T08:00:00Z",
  "returnDate":"2024-08-10T08:00:00Z"
  }

  ]
  ```

  Response:

  ```json
  [
    {
   "departFlights": 
   "departureAirport": "Egypt",
    "arrivalAirport": "Qatar",
    "departureTime": "2024-07-10T08:00:00.000Z",

    "returnFlights":  
    "arrivalAirport": "Qatar",
    "departureAirport": "Egypt",
    "departureTime": "2024-08-10T08:00:00.000Z",
  }

  ]
  ```

   ```
  POST /api/travel/multi-city-flight
  ```

  Create multi city flight

  Request:

  ```json
  [
    {
   "from":"Egypt",
  "to":"Qatar",
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
