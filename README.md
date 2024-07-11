## Weather App

### Description
This project involves creating a weather application that allows users to sign up, save their favorite cities, and fetch weather data for these cities using a weather API. The application will be built using React for the front-end and Firebase for user authentication and Firestore for data storage.

### Stack
- **Front-end:** React
- **Back-end:** Firebase Authentication and Firestore
- **APIs:** OpenCage Geocoding API, API Ninjas Weather API
- **Other tools:** Visual Studio Code for development, CSS for styling

### Focus
This project will be an evenly focused full-stack application, with a significant focus on both the front-end UI and back-end services.

### Type
This will be a responsive web application.

### Goal
The goal of the project is to create a weather application that provides users with real-time weather information for their favorite cities. Users will be able to sign up, save their favorite cities, and view weather data fetched from external APIs.

### Users
The target users for this application are individuals who are interested in keeping track of weather conditions in multiple cities. This includes travelers, commuters, and weather enthusiasts. The demographic is broad and includes users of all ages who have access to the internet and a web browser.

### Data
- **Weather Data:** Retrieved from the API Ninjas Weather API, which provides weather information based on geographic coordinates (latitude and longitude).
- **Geocoding Data:** Retrieved from the OpenCage Geocoding API, which converts city names into geographic coordinates.
- **User Data:** Stored in Firebase Authentication and Firestore, including user information and their saved favorite cities.

### Approach
The application will be developed in stages, with an initial focus on setting up the authentication system and database structure, followed by the integration of APIs and the creation of the user interface.

### Database Schem
The database schema will include a collection named `favorites`, with each document representing a favorite city saved by a user. Each document will contain the following fields:
- `userId` (string): The unique identifier of the user.
- `city` (string): The name of the city saved as a favorite.

### Potential Issues
- **API Rate Limits:** Both the OpenCage Geocoding API and the API Ninjas Weather API may have rate limits that could restrict the number of requests.
- **Data Accuracy:** Ensuring that the data returned from the APIs is accurate and up-to-date.
- **User Authentication:** Handling edge cases in user sign-up and managing user sessions securely.

### Security
Sensitive information such as API keys and user credentials will be securely stored and managed. Firebase Authentication will be used to ensure secure sign-ups and data access.

### Functionality
- User sign-up and authentication.
- Ability to save favorite cities.
- Fetching and displaying weather data for specified cities.
- Responsive design to ensure usability across different devices.

### User Flow
1. **Sign-Up:** User signs up using their email and password.
2. **Dashboard:** After signing up, the user is taken to the dashboard where they can enter a city name.
3. **Fetch Weather:** User enters a city name and clicks "Get Weather" to fetch the weather data.
4. **Save Favorite:** User can save the city as a favorite to access it quickly in the future.
5. **View Favorites:** User can view and manage their list of favorite cities.
