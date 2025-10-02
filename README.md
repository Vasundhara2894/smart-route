Smart Route is a web-based platform that helps users navigate urban areas by recommending the least congested route in real-time. The system combines live traffic camera images with a MobileNetV2 AI model to analyze congestion levels and suggests optimized routes via the TomTom Routing API.

Problem Statement

Traffic congestion causes:
Longer travel times
Higher fuel consumption
Increased pollution
Existing navigation apps often do not account for live visual traffic conditions, leading to inefficient routes. Smart Route addresses this by analyzing real-time traffic images for smarter route planning.

Key Features

#Fetches three possible routes for a given source and destination
#Uses live traffic images for congestion detection
#MobileNetV2 model classifies congestion levels (smooth → heavy traffic)
#Highlights the best route on an interactive map using Leaflet.js
#Responsive and clean UI with React + Tailwind CSS

#Tech Stack

Frontend: React, Tailwind CSS, Leaflet.js
Backend: Flask (Python)
AI Model: MobileNetV2 (TensorFlow/Keras)
APIs: TomTom Routing & Geocoding, NSW Traffic Cameras


#How It Works

User enters source and destination.
App fetches three possible routes via TomTom API.
Traffic images are collected along each route.
AI model analyzes congestion level for each route.
Route with least congestion is highlighted for the user.

CLONE REPO
git clone https://github.com/Vasundhara2894/smart-route.git
cd smart-route

BACKEND SETUP
cd backend
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
pip install -r requirements.txt
python app.py

FRONTEND SETUP
cd smart-route
npm install
npm start

#Demo Locations (Sydney)

Source: Sydney Opera House → Destination: Darling Harbour
Source: Central Station → Destination: Sydney Airport
Source: Circular Quay → Destination: Bondi Beach
