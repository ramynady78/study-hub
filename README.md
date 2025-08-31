# Learning Platform - Study-Hub

Welcome to the Study Hub Learning Platform! This project is a web-based application designed to facilitate online learning by providing a structured and user-friendly platform for course management and student engagement.

## Features
- **Home Page**.
- **All courses Page**: Browse and explore available courses with detailed descriptions.
- **User-Friendly Interface**: A clean and responsive design to ensure a smooth user experience.
- **Scalable Architecture**: Built to accommodate future enhancements and a growing user base.

## Technologies Used
- **Frontend**:
  - HTML, CSS, JavaScript
  - React.js
  - Bootstrap for styling
## Project Structure
```
project-directory
├── public
│   ├── index.html
│   └── assets
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ProductCard.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── AllProducts.js
│   │   ├── CourseDetails.js
│   ├── redux
│   │   ├── slices
│   │   │   ├── productSlice.js
│   │   │   ├── cartSlice.js
│   ├── App.js
│   ├── index.js
├── server
│   ├── models
│   │   ├── Course.js
│   │   ├── User.js
│   ├── routes
│   │   ├── courseRoutes.js
│   │   ├── userRoutes.js
│   ├── server.js
├── .env
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ramynady78/study-hub.git
   cd study-hub
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

   3- Start
     ```bash
     npm start
     ```
   The app will be available at `http://localhost:3000`.

## Deployment
 Build the frontend project for production:
   ```bash
   npm run build
   ```

