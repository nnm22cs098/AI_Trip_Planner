# AI Trip Planner

AI Trip Planner is a travel planning assistant that uses multi-AI agents to generate personalized trip plans based on user preferences. It recommends hotels and tourist attractions, displays them on an interactive map, and creates a detailed itinerary. The application integrates Firebase for storing user data and trip details.

## 🌟 Features

- 🏨 Recommends hotels based on user-selected destination
- 📍 Suggests popular tourist attractions
- 🗺️ Displays all locations on an interactive map using Google Maps
- 🧠 Uses Gemini AI to process and summarize recommendations
- 🔐 Firebase authentication and Firestore integration

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Backend/Logic**: JavaScript + Firebase
- **Database**: Firebase Firestore
- **Authentication**: Google OAuth
- **APIs**:
  - Google Places API
  - Gemini AI API (Google Generative AI)
  - Google Maps JavaScript API

## 📂 Project Structure
src/ 

├── assets/ # Images, icons, etc.

├── components/ # Reusable UI components

│ ├── custom/

│ └── ui/

├── constants/ # Configs, constants, etc.

├── create-trip/ # Trip creation flow

├── my-trips/ # Displays user’s saved trips

├── view-trip/ # Shows trip details and map

├── App.jsx

├── main.jsx

🚀 Getting Started
1.Clone the repository:
```
git clone https://github.com/nnm22cs098/ai-trip-planner.git
cd ai-trip-planner
```
2.Install dependencies:
```
npm install
```
3.Install dependencies:

```
npm install
```

4.Create a `.env` file in the root directory and add the following:

```env
VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key
VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
FIREBASE_API_KEY=your_firebase_api_key
```

5.Start the development server:
```
npm run dev
```

📸 Screenshots
![Screenshot 2025-04-21 215426](https://github.com/user-attachments/assets/7f6e7970-4ea6-4a08-a01b-4701d2d36dc4)

![Screenshot 2025-04-21 215337](https://github.com/user-attachments/assets/ab3b6ebe-f873-4606-8e32-c7a348096e41)

![Screenshot 2025-04-21 214915](https://github.com/user-attachments/assets/b9c7ba8e-9e8d-4e1a-9f7c-b16582a56177)

![Screenshot 2025-04-21 214853](https://github.com/user-attachments/assets/98896338-d99d-4f6f-805b-2f5d58b8db40)
