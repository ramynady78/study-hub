# Learning Platform - Bi-Courses

Welcome to the Study Hub Learning Platform! This project is a web-based application designed to facilitate online learning by providing a structured and user-friendly platform for course management and student engagement.

## Features
- **All Products Page**: Browse and explore available courses with detailed descriptions.
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
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bi-courses.git
   cd bi-courses
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development servers:
   - Start the backend server:
     ```bash
     npm run server
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```
   The app will be available at `http://localhost:3000`.

## Deployment
1. Build the frontend project for production:
   ```bash
   npm run build
   ```
2. Deploy the backend and frontend build folder to your hosting provider (e.g., Heroku, AWS, or Render).

## Contribution
We welcome contributions to improve the platform! Here's how you can contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using Bi-Courses! If you encounter any issues or have suggestions, feel free to reach out.
