Weather App 🌤️

A simple and elegant weather application that provides real-time weather information for any city around the world using the OpenWeatherMap API.
🌟 *Features*

1.Real-time Weather Data - Get current weather conditions for any city worldwide
2.Temperature Display - Shows temperature in Celsius
3.Detailed Weather Info - Displays weather description, humidity, and wind speed
4.Clean UI Design - Modern glassmorphism design with a beautiful atmospheric background
5.Responsive Layout - Works seamlessly on desktop and mobile devices
6.Error Handling - User-friendly error messages for invalid cities or connection issues
7.Keyboard Support - Press Enter to search for weather
8.Dynamic Updates - Weather information updates dynamically without page reload

🛠️ Technologies Used

HTML5 - Structure and semantic markup
CSS3 - Styling with glassmorphism effects, flexbox, and responsive design
JavaScript (ES6+) - Async/await for API calls and DOM manipulation
OpenWeatherMap API - Real-time weather data provider

📋 Prerequisites
A modern web browser (Chrome, Firefox, Safari, or Edge)
Internet connection for API calls
OpenWeatherMap API key (included in the project)

🔧 Installation & Setup
Clone the repository:
git clone https://github.com/yourusername/weather-app.git
Navigate to the project directory:
cd weather-app
Open index.html in your web browser or use a local server:
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
The app is ready to use! No additional configuration needed.

📱 Usage
Enter a city name in the search box (e.g., "London", "New York", "Tokyo")
Click the Search button or press Enter
View the current weather information:
🌡️ Temperature - Current temperature in Celsius
☁️ Weather Condition - Current weather description
💧 Humidity - Humidity percentage
💨 Wind Speed - Wind speed in km/h

📂 Project Structure
weather-app/
│
├── index.html          # Main HTML structure
├── style.css           # Styling with glassmorphism effects
├── script.js           # JavaScript functionality and API integration
└── README.md           # Project documentation

🎨 Customization
Change Background Image
Modify the background property in style.css:
background: url("your-image-url-here");
Change Temperature Units
To display Fahrenheit instead of Celsius, modify the API URL in script.js:
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
And update the display from °C to °F in the displayWeather function.
Modify Color Scheme
Change colors in style.css:
.search-box button {
    background: #your-color-here;
}
Change Font
Replace Poppins with your preferred Google Font in the HTML head and CSS.

🔑 API Information
This project uses the OpenWeatherMap API:
API Documentation: OpenWeatherMap Docs
Free Tier: 60 calls/minute, 1,000,000 calls/month
Data Includes: Temperature, weather description, humidity, wind speed, and more
Using Your Own API Key
If you want to use your own API key:
Sign up at OpenWeatherMap
Get your free API key
Replace the API key in script.js:
const API_KEY = "your_api_key_here";

🐛 Error Handling
The app handles the following errors gracefully:
Empty Input - "Please enter a city name"
City Not Found - "City not found!"
Network Error - "Network error. Try again."
🌐 Browser Compatibility
✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Opera

🤝 Contributing
Contributions are welcome! Here's how you can help:
Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
Ideas for Contributions
Add 5-day weather forecast
Include weather icons
Add geolocation support
Implement dark/light mode toggle
Add weather alerts and notifications
Support for multiple languages

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
Avishi Jain
GitHub: Avishi0611
LinkedIn: 
Email: avishijain2116@gmail.com 

🙏 Acknowledgments
Weather data provided by OpenWeatherMap
Background image from Pexels
Font: Poppins from Google Fonts
Inspiration from modern weather app designs


https://avishi0611.github.io/weather-app/
