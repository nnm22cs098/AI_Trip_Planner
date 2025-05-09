Thanks! Let's update the `README.md` to reflect the actual structure of your project, including the folders like `my-trips`, `create_trip`, and `view_trip`.

Here's the revised version:

---

```markdown
# AI Trip Planner

AI Trip Planner is a travel planning assistant that uses multi-AI agents to generate personalized trip plans based on user preferences. It recommends hotels and tourist attractions, displays them on an interactive map, and creates a detailed itinerary. The app uses Firebase to store user data and trip details securely.

## 🌟 Features

- 🏨 Recommends hotels based on selected destination
- 📍 Suggests must-visit tourist spots
- 🗺️ Shows an interactive map with pins for each place
- 🧠 Uses Gemini AI to assist in generating custom travel plans
- 🔐 Firebase authentication and Firestore integration for storing trips

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **State Management**: React Context / Hooks
- **Authentication & DB**: Firebase Auth + Firestore
- **APIs**:
  - Google Places API
  - Gemini AI API
  - Google Maps JavaScript API

## 📂 Project Structure

```

src/
├── assets/                 # Images, icons, etc.
├── components/             # Reusable UI components
│   ├── custom/
│   └── ui/
├── constants/              # Configs, constants, etc.
├── create-trip/            # Trip creation flow
├── my-trips/               # Displays user’s saved trips
├── view-trip/              # Shows trip details and map
├── App.jsx
├── main.jsx


## 🚀 Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/ai-trip-planner.git
   cd ai-trip-planner
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add:

```env
VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key
VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
FIREBASE_API_KEY=your_firebase_api_key
````


4. Run the app:

   ```bash
   npm run dev
   ```

## 📸 Screenshots

![Screenshot 2025-04-21 215426](https://github.com/user-attachments/assets/2e6cf2dc-5557-404e-88c8-cc75493dc49c)

![Screenshot 2025-04-21 215337](https://github.com/user-attachments/assets/c3ae5740-efe5-441a-af81-3f90843aa0f8)

![Screenshot 2025-04-21 214915](https://github.com/user-attachments/assets/12098396-fbf7-4834-9161-b5eed2440588)

![Screenshot 2025-04-21 214853](https://github.com/user-attachments/assets/26ad0428-cb7d-4073-ba52-ea0e83f42dfe)
